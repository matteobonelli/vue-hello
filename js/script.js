const { createApp } = Vue;

const myApp = createApp({
                data() {
                    return {
                        title : 'Hello Vue!',
                        containerClasses: 'd-flex justify-content-center align-items-center flex-column',
                        myClasses : 'text-center display-2 fw-bold',
                        image : 'img/rocks.jpg',
                        imageClasses : 'w-100 mt-4'
                    }
                }
            });

myApp.mount('#app')