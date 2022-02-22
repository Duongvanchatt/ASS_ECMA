import { getAll } from "../api/post";
const News = {
    async render() {
        const { data } = await getAll();
        return /* html */ `
                    <div class="grid grid-cols-3 gap-8">
                        ${data.map((post) => `
                        <div class="border p-3">
                            <a href="/#/news/${post.id}"><img src="${post.img}" alt="" /></a>
                            <h3 class="my-3"><a href="/news/${post.id}" class="font-semibold text-orange-500 text-lg">${post.title}</a></h3>
                            <p>${post.desc}</p>
                        </div>
                        `).join("")}
                    </div>
                    
                    `;
    },
};
export default News;