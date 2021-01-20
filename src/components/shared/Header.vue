<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark"
    style="background-color: #563f7a"
  >
    

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
       <router-link active-class="active" to="/" tag="li" class="nav-item" exact>
       <a class="nav-link">Item List</a>
        </router-link>
        <router-link active-class="active" to="/urun-islemleri" tag="li" class="nav-item">
          <a class="nav-link">Item Operation</a>
        </router-link>
           
           <router-link active-class="active" to="/urun-cikisi" tag="li" class="nav-item">
          <a class="nav-link">Item Exit</a>
        </router-link>

      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>