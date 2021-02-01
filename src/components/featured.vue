<template>
<div class="main">
    <h1 class="btm">Featured</h1>
    <div class="container">
        <div class="sale-card" v-for="data in data" :key="data">

            <div class="faint-category">
                <p>{{data.category}}</p>
            </div>
            <h1 class="name">{{data.title}}</h1>
            <img :src='data.image' alt="">
            <div class="desc">
                <p>{{data.description}}</p>
            </div>
            <div class="cart-buy">

                <button class='btn'>View</button>
                <button class='btn'>Add to Cart</button>
                <button class='btn'>${{data.price}}</button>
            </div>

        </div>
    </div>

</div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            price: '',
            Desc: "",
            img: "",
            category: '',
            name: '',
            data: '',
        }
    },
    methods: {
        getData() {
            axios.get('https://fakestoreapi.com/products').then((res) => {
                console.log(res.data)
                this.data = res.data;
                this.data = res.data.slice(2, 5)

            })
        }

    },
    mounted() {
        this.getData()

    },
}
</script>

<style scoped>
.main {
    color: #03045E;
    background: #ffffff;
    ;
    height: fit-content;
}

.container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.sale-card {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    min-width: 300px;
    padding-left: 20px;
    border: 1px solid black;
    border-top: 6px solid black;
    border-right:6px solid black ;
    border-top-right-radius: 30px;
    height: 400px;
    margin: 6px;
    align-items: center;
    transition: 0.5s ease-in;
    transform: scale(0.9);
}
.sale-card:hover{
    transform: scale(0.8);

}

.btm,
.name {
    font-family: 'Roboto', sans-serif;
    font-weight: 100;

}
.btm{
    border-bottom: 5px solid black;
    margin-bottom: 20px;
    width: fit-content;
    padding-left: 100px;
}

.name {
    width: 200px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
}

img {
    width: 180px;
    height: 210px;

}

.desc>p {
    width: 250px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-family: 'Roboto', sans-serif;
    margin: 20px 0;
    color: #000000;

}

.btn {
    width: 100px;
    height: 30px;
    border: none;
    background: black;
    color: white;
    margin: 7px;
    font-family: 'Roboto', sans-serif;

}

.faint-category {
    color: #ccc7c7;
    align-self: flex-end;
    padding: 3px;
}
@media(max-width: 576px){
    .sale-card{
        width: 100vw;
        transform: scale(1);
    }
    .btn{
        transform: scale(0.7);
         margin: 3px;

    }

}
</style>
