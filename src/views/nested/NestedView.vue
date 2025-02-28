<template>
  <div>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <!-- replace: true => 라우터 이동 시 현재 페이지를 기록하지 않음 -->
        <RouterLink class="nav-link" :to="{name: 'nestedOneName', replace: true}" active-class="active">Nested One</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" :to="{name: 'nestedTwoName', replace: true}" active-class="active">Nested Two</RouterLink>
      </li>
    </ul>
  </div>
  <hr class="my-4" />
  <RouterView></RouterView>
  <!-- TheView 하위의 라우터 뷰 내에서 NestedView 컴포넌트에서 라우터 뷰를 사용할 수 있음 (중첩된 라우터) -->
</template>

<script setup></script>

<style scoped></style>
