<template>
<div id="main">
    <div class="intro">

        <h1 class='welcome'>Welcome to our shop</h1>
        <h2>Shop with us today</h2>
        <p>Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
            Ad velit necessitatibus mollitia
            reiciendis. Ab aperiam repellendus
            placeat nostrum obcaecati fuga!</p>
        <button id="buy">Buy Now</button>
        <div class='socials'>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-linkedin-in"></i>

        </div>
    </div>
    <featured />
</div>
</template>

<script>
import featured from '@/components/featured'
export default {
    components: {
        featured,

    }

}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
}

#main {
    background: url('~@/assets/van-thanh-1rV_GcpFNiQ-unsplash.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.intro {
    background: url('~@/assets/van-thanh-1rV_GcpFNiQ-unsplash.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background: rgb(0, 0, 0);
    width: 700px;
    height: 90vh;
    color: white;
    padding-left: 30px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;

}

h1 {
    font-size: 4em;
    line-height: 100px;
    color: #CAF0F8;
    font-family: 'Roboto', sans-serif;
    text-align: left;
    transform: translateY(-60px);

}

h2 {
    font-size: 2em;
    color: #0096C7;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    transform: translateX(50px);

}

p {
    width: 300px;
    margin-top: 20px;
    font-size: 1.1em;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: 1px;
    text-align: right;
}

#buy {
    width: 100px;
    height: 35px;
    border: none;
    background: white;
    margin-top: 30px;
    border-radius: 10px;
    color: #14213D;
    font-family: 'Roboto', sans-serif;
    transform: translateX(200px);

}

.socials {
    color: white;
    display: flex;
    align-self: flex-end;
}

.socials>i {
    margin: 4px;
}

@media(max-width: 576px) {
    .intro {
        width: 100vw;
    }

    h1 {
        font-size: 3rem;
        line-height: 60px;
        transform: translateY(40px);
		font-weight: 100;
    }

    p {
        text-align: left;
        margin-top: 10px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;

    }

    h2 {
        text-align: left;
        margin-top: 30px;
        transform: translateY(0);
		font-weight: 400;

    }

    .socials {
        color: white;
        display: flex;
        justify-self: center;
        align-self: center;
        margin-top: 20px;
        font-size: 1.2em;
    }

    #buy {
        transform: translateX(0);
    }

}
</style>
