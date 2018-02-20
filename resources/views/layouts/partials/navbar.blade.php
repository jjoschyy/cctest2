<nav class="navbar navbar-expand-lg navbar-dark top-nav-collapse">
    <a class="navbar-brand mt-1" href="/"><img src="/images/logos/ProBoard/Zeiss_ProductionBoard_weiss_klein.png" /><strong>&nbsp;&nbsp;{{ config('app.name') }}</strong><br/><small style="position: absolute; top: 45px;left: 65px;font-size: 7pt;">Copyright Carl Zeiss AG</small></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav mr-auto mt-0 mt-lg-0">
            <?php
            $mg = new \App\Library\MenuGenerator();
            echo $mg->render();
            ?>
        </ul>

        <span class="my-2 my-lg-0">
            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {{ Auth::user()->first_name }} {{ Auth::user()->last_name }}
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a  class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();" >
                            Logout
                            <form id ="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">{{ csrf_field() }}</form>
                        </a>
                    </div>
                </li>
            </ul>
        </span>
    </div>
</nav>
