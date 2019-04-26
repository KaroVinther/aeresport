        let billeder = [];
        document.addEventListener("DOMContentLoaded", start);

        function start() {
            let dest = document.querySelector(".masonry");
            async function getJson() {
                let jsonData = await fetch("hej.json");
                billeder = await jsonData.json();
                visBilleder();
            }

            function visBilleder() {
                console.log("hej");
                dest.innerHTML = "";
                billeder.forEach(pic => {
                    let template = `
                    <div class="item">
                        <img src="billeder/${pic.billede}" alt="Billede af æresporte">
                    </div>`;

                    dest.insertAdjacentHTML("beforeend", template);
                })
            }
            getJson();
        }
