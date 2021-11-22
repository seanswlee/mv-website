<template>
    <nav class="footer-nav">
        <ul class="list-reset">
            <li>
                <router-link to="/contact/">Contact</router-link>
            </li>
            <li>
                <router-link to="/about-us/">About us</router-link>
            </li>
            <li>
                <router-link to="/faqs/">FAQ's</router-link>
            </li>
            <li>
                <router-link to="/support/">Support</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: 'CFooterNav'
}
</script>
