const { createApp } = Vue;

const myApp = createApp({
                data() {
                    return {
                        title : 'Hello Vue!',
                        containerClasses: 'd-flex justify-content-center align-items-center flex-column',
                        myClasses : 'text-center display-2 fw-bold',
                        imageRocks : 'img/rocks.jpg',
                        imageLake : 'img/lake.jpg',
                        imageClasses : 'w-100 mt-4',
                        rocks : true
                    }
                },
                methods : {
                    changeImage(){
                        this.rocks = !this.rocks
                    }
                }
            });

myApp.mount('#app')