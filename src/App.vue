<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100%;

    }

    .html, html, body {
        height: 100%;
        margin: 0;
        background: #F0F0F0;
    }

</style>


<style>
    .el-container {
        height: 100%;
    }

    .el-footer {
        background: white;
        border-top: 1px solid #EBEBEB;
        height: 50px;
    }

    .el-header {
        background: white;
        border-bottom: 1px solid #EBEBEB;
        padding: 0;
    }

    .el-main {
        height: 100%;
    }

    .el-aside {
        background: white;
        border-right: 1px solid #EBEBEB;
    }

    .el-main::-webkit-scrollbar {
        width: 6px;
        /*height: 4px;*/
    }

    .el-main::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        background: rgba(0, 0, 0, 0.2);
    }

    .el-main::-webkit-scrollbar-track {
        background: #F0F0F0;
    }

</style>
