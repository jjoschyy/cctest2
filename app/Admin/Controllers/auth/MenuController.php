<?php

namespace App\Admin\Controllers\Auth;

use App\Menue;
use App\Http\Controllers\Controller;

use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Facades\Admin;
use Encore\Admin\Layout\Content;
use Encore\Admin\Controllers\ModelForm;



class MenuController extends Controller
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
          $content->header(trans("admin.view_menues.title"));
          $content->body(Menue::tree());
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
            $content->header(trans("admin.view_menues.title"));
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
            $content->header(trans("admin.view_menues.title"));
            $content->body($this->form());
        });
    }


    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        return Admin::form(Menue::class, function (Form $form) {
          $form->text('title', $this->t('title'))->rules('required');
          $form->text('uri', $this->t('uri'))->rules('required');
          $form->text('permission_slug', $this->t('permission_slug'));

          $form->select('parent_id', $this->t('parent_id'))
            ->options(\App\Menue::selectOptions())->rules('required');

          $form->switch("show_in_iframe", $this->t('show_in_iframe'));
        });
    }


    private function t($key){
        return trans('admin.view_menues.col_'.$key);
    }

}
