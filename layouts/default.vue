<template>
  <div>
    <div class="navbar">
      <div class="navbar__wrapper">
        <div class="navbar__left-section left-section">
          Anyer Adventure
        </div>
        <div class="navbar__middle-section middle-section">
          <!-- <div class="middle-section__home">
            <u>Home</u>
          </div> -->
          <NuxtLink
            to="/"
            class="middle-section__link"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/explore"
            class="middle-section__link"
          >
            Explore
          </NuxtLink>
        </div>
        <!-- <div class="navbar__right-section right-section">
  
        </div> -->
      </div>
    </div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  @import "../main.scss";
  @import '@/assets/css/responsive.scss';

  .navbar {
    background-color: $main-bg-color;
    width: 100%;
    padding: 20px 0;
    border-bottom: 1px solid lightgray;

    @include mobile {
      padding-left: 16px;
      padding-right: 16px;
    }
    
    &__wrapper {
      max-width: 1200px;
      margin: auto;
      display: flex;
      justify-content: space-between;
    }

    .left-section {
      font-weight: 600;
    }

    .middle-section {
      display: flex;
      gap: 40px;
      
      &__link {
        color: black;
      }
    }
  }
</style>
