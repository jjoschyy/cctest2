<?php

namespace App\Library;
use Illuminate\Support\Facades\Gate;

class MenuGenerator {

    protected $items;

    /**
     * Build menu based on the "Menue" model
     * Hide not authorized menu items
     */
    public function __construct(){
      $this->prepare();
    }

    /**
     * Build menu items array based on user rights
     */
    private function prepare(){
      foreach (\App\Menue::orderBy('order')->get() as $item)
         $this->addItem($item);
    }

    /**
     * Add one menu item
     */
    private function addItem($item){
      if (!$item->parent_id)
        $this->addMainItem($item);
      else
        $this->handleSubItem($item);
    }

    /**
     * Add top menu item
     */
    private function addMainItem($item){
      $this->items[$item->id] = array(
          'title' => $item->title,
          'link' => $item->uri
      );
    }

    /**
     * Add sub menu item if right enabled
     */
    private function handleSubItem(&$item){
      if (Gate::allows('show-menu-item', $item))
        $this->addSubItem($item);
    }

    /**
     * Add sub menu item
     */
    private function addSubItem(&$item){
      $this->items[$item->parent_id]['submenu'][] = array(
        'title' => $item->title,
        'link' => $this->buildLink($item)
      );
    }

    /**
     * Build link. Iframe is supported.
     */
    private function buildLink(&$item){
      return $item->show_in_iframe ? ("/iframe?src=" . $item->uri) : $item->uri;
    }

    /**
     * Render menu to Bootstrap menu
     */
    public function render() {
      $content = "";

      foreach ($this->items as $item)
        $this->renderItem($content, $item);

      return $content;
    }


    private function renderItem(&$content, &$item){
      if (isset($item['submenu']))
        $this->addRenderItem($content, $item);
    }


    private function addRenderItem(&$content, &$item){
        $content .= '<li class="nav-item dropdown">';
        $content .= '<a class="nav-link dropdown-toggle" href="' . $item['link'] . '" data-toggle="dropdown">' . $item['title'] . '</a>';
        $content .= '<div class="dropdown-menu">';
        $content .= $this->renderSubMenuItems($item['submenu']);
        $content .= '</div>';
        $content .= '</li>';
    }


    private function renderSubMenuItems($submenu) {
        $content = "";
        foreach ($submenu as $item)
            $content .= '<a class="dropdown-item" href="' . $item['link'] . '">' . $item['title'] . '</a>';

        return $content;
    }
}
