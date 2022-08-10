const {createApp, ref, onMounted } = Vue; 

const app = createApp({
    setup() {
        const urlMakanan = "http://localhost:7000/makanan";
        const urlMinuman = "http://localhost:7000/minuman";
        const Makanan = ref({});
        const Minuman = ref({});
        const Menu = document.getElementById("menu");

        const pilihMakanan = async () =>{
            const respond = await axios.get(urlMakanan);

            Makanan.value = respond.data;
            Minuman.value = [];
        };
        const pilihMinuman = async () =>{
            const respond = await axios.get(urlMinuman);

            Makanan.value = [];
            Minuman.value = respond.data;
        };
        /*const profileUser = ref("");
        const nameUser = ref("");
        const nameLast = ref("");

        const generateUser = async () => {
            const resUser = await axios.get(url);
            nameUser.value = resUser.data.nama;
           
            nameLast.value = resUser.data.results[0].name.last;
           profileUser.value = resUser.data.results[0].picture.large;
        

        }; */
        

        return {
            pilihMakanan,
            pilihMinuman,
            Makanan,
            Minuman,
            /*generateUser,
            profileUser,
            nameUser,
            nameLast,*/
        };
    },
});

app.mount("#app");