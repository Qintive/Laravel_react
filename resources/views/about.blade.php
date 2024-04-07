@extends('layout')

@section('title')
Обо мне
@endsection

@section('main_content')
<div class="container my-5">
    <div class="p-5 text-center bg-body-tertiary rounded-3">
      <img class="bi mt-4 mb-3" style="color: var(--bs-indigo);" width="650" height="500" src="https://b2b2c.market/oc-content/uploads/19821/1967917.jpg"></img>
      <h1 class="text-body-emphasis">Jumbotron with icon</h1>
      <p class="col-lg-8 mx-auto fs-5 text-muted">
        This is a custom jumbotron featuring an SVG image at the top, some longer text that wraps early thanks to a responsive <code>.col-*</code> class, and a customized call to action.
      </p>
    </div>
  </div>
@endsection