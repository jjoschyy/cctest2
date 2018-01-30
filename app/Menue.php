<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Http\Request;
use App\Library\Helper\LocationHelper;

class Menue extends Model {

    use SoftDeletes;

    protected $guarded = [];
    protected $casts = [
        'title' => 'string',
        'route' => 'string',
        'params' => 'string',
        'parent_id' => 'integer',
        'permission_string' => 'string',
        'location_id_list' => 'array'
    ];

    public function getParentTitle() {
        if ($parentObj = $this->getParent()) {
            return $parentObj->title;
        }
        return "";
    }

    public function getParent() {
        if ($this->parent_id) {
            return \App\Menue::find($this->parent_id);
        }
        return FALSE;
    }

    public function getParentList($type = false) {
        switch ($type) {
            case "form":
                $formList = array();
                foreach (\App\Menue::whereNull("parent_id")->get() as $item) {
                    $formList[] = array(
                        "value" => $item->id,
                        "name" => $item->title,
                    );
                }
                break;
            default:
                $formList = \App\Menue::whereNull("parent_id")->get();
                break;
        }
        return $formList;
    }

    public function getSelectedLocationList($type = false) {
        $menue_locationList = ($this->location_id_list) ? $this->location_id_list : array();
        $locationList = \App\Location::getLocationList($type);
        switch ($type) {
            case "form":
                foreach ($locationList as $key => $item) {
                    if (in_array($item['value'], $menue_locationList)) {
                        $locationList[$key]['selected'] = true;
                    }
                }
                break;
            default:
                foreach ($locationList as $key => $item) {
                    if (!in_array($item->id, $menue_locationList)) {
                        unset($locationList[$key]);
                    }
                }
                break;
        }
        return $locationList;
    }

    /**
     * Save Menue item from Request
     * @param Request $request
     * @return type
     */
    public function saveFromRequest(Request $request) {
        $isNew = TRUE;
        if ($request->get("id")) {
            $isNew = FALSE;
        }
        $this->setAttribute("title", $request->get("title"));
        $this->setAttribute("route", $request->get("route"));
        $this->setAttribute("params", $request->get("params"));
        $this->setAttribute("parent_id", $request->get("parent_id"));
        $this->setAttribute("permission_string", $request->get("permission_string"));
        $this->setAttribute("location_id_list", $request->get("selected_locations"));
        return array("obj" => $this, "status" => ($isNew) ? $this->save() : $this->update());
    }

    /////////////////////////////////////////
    // location check
    /////////////////////////////////////////
    public function hasLocation($location) {
        return LocationHelper::check($this->location_id_list, $location);
    }

    /////////////////////////////////////////
    // relations
    /////////////////////////////////////////
    public function parent() {
    return $this->belongsTo(self::class);


    }

public function children() {
    return $this->hasMany(self::class, 'parent_id');
}

}
