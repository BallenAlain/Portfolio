<template>
    <nav class="navbar">

        <div class="nav-content">

            <router-link to="/" class="name">
                <span class="name-box">
                    <img src="../assets/ab.png" alt="Logo" width="40" height="40">
                </span>
                <span class="name">ALAIN BALLEN</span>
            </router-link>



            <div class="nav-links">
                <router-link to="/about" class="nav-link">
                    About
                </router-link>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    background-color: #ffffff;
    padding: 1rem 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}


.name-box {
    display: inline-block;
    padding-right: 1rem;
    padding-left: 0.5rem;
    margin: 0.5rem 0.2rem 0.1rem 0;
}

.nav-content {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
}

.name {
    display: inline-flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 600;
    transition: all 0.3s ease;
    text-decoration: none;
    color: #4b7ced;
}

.nav-links {
    display: flex;
    gap: 2rem;
}

.nav-link {
    text-decoration: none;
    color: #2c3e50;
    font-weight: 500;
    padding-right: 1rem;
    transition: color 0.3s ease;
    font-size: 1rem;
}

.nav-link:hover {
    color: #4b7ced;
}

.last-name {
    color: #3498db;
}
</style>