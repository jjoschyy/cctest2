<?php

namespace App\Admin\Controllers\Auth;

use App\User;
use App\UserPermission;
use App\Http\Controllers\Controller;

use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Facades\Admin;
use Encore\Admin\Layout\Content;
use Encore\Admin\Controllers\ModelForm;


class UserPermissionController extends Controller
{
    use ModelForm;

    /**
     * Index interface.
     *
     * @return Content
     */
    public function index()
    {
        return Admin::content(function (Content $content) {
            $content->header(trans("admin.view_user_permissions.title"));
            $content->body($this->grid()->render());
        });
    }

    /**
     * Edit interface.
     *
     * @param $id
     *
     * @return Content
     */
    public function edit($id)
    {
        return Admin::content(function (Content $content) use ($id) {
            $content->header(trans("admin.view_user_permissions.title"));
            $content->body($this->form()->edit($id));
        });
    }

    /**
     * Create interface.
     *
     * @return Content
     */
    public function create()
    {
        return Admin::content(function (Content $content) {
            $content->header(trans("admin.view_user_permissions.title"));
            $content->body($this->form());
        });
    }

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        return Admin::grid(UserPermission::class, function (Grid $grid) {
            $grid->id("Id");
            $grid->module($this->t("module"))->sortable();
            $grid->slug($this->t("slug"))->label();
        });
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    public function form()
    {
        return Admin::form(UserPermission::class, function (Form $form) {
           $form->select("module", $this->t("module"))->options(['GO' => 'GO'])->rules('required');
           $form->text('slug', $this->t("slug"))->rules('required');
           $form->display('created_at', trans('admin.created_at'));
           $form->display('updated_at', trans('admin.updated_at'));
        });
    }


    private function t($key){
        return trans('admin.view_user_permissions.col_'.$key);
    }


}
