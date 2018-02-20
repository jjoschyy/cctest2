<?php

namespace App\Admin\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;

use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Facades\Admin;
use Encore\Admin\Layout\Content;
use Encore\Admin\Controllers\ModelForm;
use App\Library\ActiveDirectory\AdUser;


class UserController extends Controller
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
            $content->header(trans("admin.view_users.title"));
            $content->body($this->grid());
        });
    }

    /**
     * Edit interface.
     *
     * @param $id
     * @return Content
     */
    public function edit($id)
    {
        return Admin::content(function (Content $content) use ($id) {
            $content->header(trans("admin.view_users.title"));
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
            $content->header(trans("admin.view_users.title"));
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

        return Admin::grid(User::class, function (Grid $grid) {

          $grid->filter(function($filter){
            $filter->like('username', $this->t('username'));
            $filter->like('first_name', $this->t('first_name'));
            $filter->like('last_name', $this->t('last_name'));
            $filter->like('employee_number', $this->t('employee_number'));
            $filter->like('email', $this->t('email'));
          });

          $grid->id('Id');
          $grid->username($this->t('username'));
          $grid->first_name($this->t('first_name'))->sortable();
          $grid->last_name($this->t('last_name'))->sortable();
          $grid->location()->title($this->t('location'));
          $grid->employee_number($this->t('employee_number'))->sortable();
          $grid->email($this->t('email'))->sortable();
          $grid->roles($this->t('roles'))->pluck('name')->label();
        });
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        return Admin::form(User::class, function (Form $form) {

          // render form
          $form->tab(trans('admin.view_users.tab1'), function ($form) {
            $this->tab1($form);
          })->tab(trans('admin.view_users.tab2'), function ($form) {
            $this->tab2($form);
          })->tab(trans('admin.view_users.tab3'), function ($form) {
            $this->tab3($form);
          });

          // callback before save
          $form->saving(function (Form $form) {
              if (AdUser::missing($form->username))
                throw new \Exception(trans('admin.view_users.aduser_invalid') . " " . $form->username);
          });

          // callback after save
          $form->saved(function ($form) {
             $form->model()->syncAdProperties();
          });
        });
    }


    private function tab1($form){
      $form->text('username', $this->t('username'))
        ->rules('required|min:5');

      $form->text('employee_number', $this->t('employee_number'))
        ->rules('required');

      $form->text('cost_center', $this->t('cost_center'))
        ->rules('required');

      $form->select('location_id', $this->t('location'))
        ->options(\App\Location::all()->pluck('title', 'id'))->rules('required');

      $form->select('language_id', $this->t('language'))
        ->options(\App\Language::all()->pluck('title', 'id'))->rules('required');

      $form->multipleSelect('roles', $this->t('roles'))
        ->options(\App\UserRole::all()->pluck('name', 'id'));

      $form->switch("is_admin", $this->t('is_admin'));
    }


    private function tab2($form){
      $form->text('first_name',$this->t('first_name'))->readonly();
      $form->text('last_name', $this->t('last_name'))->readonly();
      $form->text('email', $this->t('email'))->readonly();
      $form->text('phone', $this->t('phone'))->readonly();
      $form->text('mobile',$this->t('mobile'))->readonly();
      $form->text('office', $this->t('office'))->readonly();
    }


    private function tab3($form){
      $form->display('created_at', trans('admin.created_at'));
      $form->display('updated_at', trans('admin.updated_at'));
    }


    private function t($key){
        return trans('admin.view_users.col_'.$key);
    }
}
