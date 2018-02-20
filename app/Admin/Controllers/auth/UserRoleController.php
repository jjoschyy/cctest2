<?php

namespace App\Admin\Controllers\Auth;

use App\UserRole;
use App\UserPermission;

use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Facades\Admin;
use Encore\Admin\Layout\Content;
use App\Http\Controllers\Controller;
use Encore\Admin\Controllers\ModelForm;

class UserRoleController extends Controller
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
          $content->header(trans("admin.view_user_roles.title"));
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
          $content->header(trans("admin.view_user_roles.title"));
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
          $content->header(trans("admin.view_user_roles.title"));
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
      return Admin::grid(UserRole::class, function (Grid $grid) {
          $grid->filter(function($filter){
            $filter->like('name', $this->t('name'));
          });

          $grid->id('Id');
          $grid->name($this->t("name"));
          $grid->permissions($this->t("permissions"))->pluck('slug')->label();
      });
  }

  /**
   * Make a form builder.
   *
   * @return Form
   */
  public function form()
  {
      return Admin::form(UserRole::class, function (Form $form) {
          $form->text('name', $this->t("name"))->rules('required');
          $form->listbox('permissions', $this->t("permissions"))->options(UserPermission::all()->pluck('slug', 'id'));
          $form->display('created_at', trans('admin.created_at'));
          $form->display('updated_at', trans('admin.updated_at'));
      });
  }


  private function t($key){
      return trans('admin.view_user_roles.col_'.$key);
  }

}
