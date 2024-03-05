import store from "./store.js"
export default {
    mostrar: () => {
        console.log("funciona");
    },
    getNombre: () => {
        console.log("devuelve el nombre");
    },
    sumar: ({
        numero1 = numero1,
        numero2 = numero2
    }) => {
        console.log(numero1 + numero2)
    },
    urlFetch: (data) => {
        const params = new URLSearchParams();
        for (const key in data) {
          params.append(key, data[key]);
        }
        return params;
    },
    redirect:({
        page,
        props,
        ignoreCache = false,
        openIn = false
      }) => {
      
        if (page == "back") {
          app.view.main.router.back();
          return;
        }
      
        let options = {
          props: props,
          ignoreCache: ignoreCache,
        };
      
        if (openIn) options["openIn"] = openIn;
      
        store.dispatch("actualizarProps", props); // pero este  store no se como conectarlo y qst
      
        app.views.main.router.navigate(`/${page}/`, options);
        
      }

};