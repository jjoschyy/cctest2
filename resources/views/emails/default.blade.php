<style>

    div.container {
    padding-top: 30px;
    text-align: center;
    }

    table.main {
    font-family: verdana, geneva, arial, helvetica, sans-serif;
    border-collapse: collapse;
    padding-left: 35px;
    width: 600px;
    margin-left: auto; 
    margin-right: auto;
    }

    table.content {
    font-family: verdana, geneva, arial, helvetica, sans-serif;
    font-size: 12px;
    padding-left: 35px;
    width: 100%;
    }

    table.data {
    font-family : verdana, geneva, arial, helvetica, sans-serif;
    font-size   : 12px;
    padding-right : 8px;
    padding-left  : 8px;
    border: #abafbc 1px solid;
    }

    table.data-borderless {
    font-family: verdana, geneva, arial, helvetica, sans-serif;
    font-size: 12px;
    padding-right: 8px;
    }


    h1 {
    margin: 0px;
    color: #ffffff;
    font-size: 24px;
    font-weight: normal;
    }

    h2 {
    margin: 0px;
    color: #000000;
    font-size: 10px;
    font-weight: normal;
    }


    p.password {
    margin: 0px;
    color: #000000;
    font-size: 12px;
    font-weight: normal;
    }

    td.header {
    height:80px;
    background-color: #abafbc;
    }


    td.status-line {
        background-color: #0000cc;
    height: 10px;
    }

    td.content {
    height:200px;
    padding-left: 30px;
    padding-right: 30px;
    border-left: #abafbc 1px solid;
    border-right: #abafbc 1px solid;
    vertical-align: top;
    padding-top: 8px;
    padding-bottom: 20px;
    }

    td.part {
    padding:10px 3px 8px 3px;
    border-bottom: #BBBBBB 1px solid;  
    }

    td.bold {
    font-weight: bold;
    }

</style>

<div class="container">
    <table class="main">
        <tr>
            <td class="header">
                <h1>
                    Proboard
                </h1>
                <h2>
                   Confirmation error
                </h2>
            </td>
        </tr>
        <tr>
            <td class="status-line"></td>
        </tr>
        <tr>
            <td class="content">
                <table class="content">
                    <tr>
                        <td class="part">
                            Eine confirmation konnte nicht gesendet werden
                        </td>
                    </tr>
                    <tr>
                        <td class="part">
                          Confirmations: 5656555,55555,5555,5555
                        </td>
                    </tr>
                </table>

            </td>
        </tr>
        <tr>
            <td class="status-line">Fehlercode 12345</td>
        </tr>
    </table>
</div>






<!--
:css
  div.container {
    padding-top: 30px;
    text-align: center;
  }
  
  table.main {
    font-family: verdana, geneva, arial, helvetica, sans-serif;
    border-collapse: collapse;
    padding-left: 35px;
    width: 600px;
    margin-left: auto; 
    margin-right: auto;
  }
  
  table.content {
    font-family: verdana, geneva, arial, helvetica, sans-serif;
    font-size: 12px;
    padding-left: 35px;
    width: 100%;
  }
  
  table.data {
    font-family : verdana, geneva, arial, helvetica, sans-serif;
    font-size   : 12px;
    padding-right : 8px;
    padding-left  : 8px;
    border: #abafbc 1px solid;
  }

  table.data-borderless {
    font-family: verdana, geneva, arial, helvetica, sans-serif;
    font-size: 12px;
    padding-right: 8px;
  }
  
  
  h1 {
    margin: 0px;
    color: #ffffff;
    font-size: 24px;
    font-weight: normal;
  }
  
  h2 {
    margin: 0px;
    color: #000000;
    font-size: 10px;
    font-weight: normal;
  }
  

  p.password {
    margin: 0px;
    color: #000000;
    font-size: 12px;
    font-weight: normal;
  }

  td.header {
    height:80px;
    background-color:#abafbc;
  }
  
  
  td.status-line {
    background-color:#{@state_color};
    height: 10px;
  }
  
  td.content {
    height:200px;
    padding-left: 30px;
    padding-right: 30px;
    border-left: #abafbc 1px solid;
    border-right: #abafbc 1px solid;
    vertical-align: top;
    padding-top: 8px;
    padding-bottom: 20px;
  }
  
  td.part {
    padding:10px 3px 8px 3px;
    border-bottom: #BBBBBB 1px solid;  
  }
  
  td.bold {
    font-weight: bold;
  }


.container
  %table.main
    %tr
      %td.header
        %h1= @title
        %h2= @sub_title

    %tr
      %td.status-line

    %tr
      %td.content
        =yield

    %tr
      %td.status-line 
      
      
      
      
      %table.content
  %tr
    %td.part
      =t('email.delayed_job_exception.part1')
      <b>
      ="#{@job.handler_class}."
      </b> 
      =t('email.delayed_job_exception.part2')

  %tr
    %td.part
      =@job.message.gsub(/\n/, '<br>').html_safe #html_safe for not escaping '<br>' -->
      