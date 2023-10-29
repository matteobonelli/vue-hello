const { createApp } = Vue;

const myApp = createApp({
                data() {
                    return {
                        title : 'Hello Vue!',
                        myClasses : 'text-center display-2 fw-bold'
                    }
                }
            });

myApp.mount('#app')