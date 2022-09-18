

let btn = document.querySelector(".btn1")

   
    function req(e) {
        
        const form = document.querySelector("form");
        let formData = new FormData(form);
        formData.append("id", `id${Math.random()*100000000000000000}`);
        let obj = {};
        formData.forEach((value, key) => {
            obj[key] = value;
        })
        
        async function getResource(url, data) {
            const res = await fetch(`http://localhost:3000/people`,     
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(data)
                });
            if (!res.ok) {
                throw new Error(`Could not fetch ${url},status:${res.status}`)
            }
            return await res.json()
        }
        getResource("http://localhost:3000/people", obj)
            .then(data => console.log(data))
            .catch(err => console.error(err))
       
    }
    document.querySelector("button").addEventListener("click", req, { "once": true })
       
  


