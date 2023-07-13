<template>
    <div class="container">
        <h1>GITHUB PROJECTS PAGE</h1>
        <div v-if="repos && repos.length > 0">
            <ul>
                <li v-for="repo in repos" :key="repo.id">
                    <a :href="repo.html_url" target="_blank">{{ repo.name }} <span v-if="repo.topics && repo.topics.length > 0">-</span> <span style="margin-right: 15px; background-color: yellow;" v-for="topic in repo.topics" :key="topic">{{ topic }}</span></a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue'

const repos = ref(null)
const getGithubRepos = async () => {
    try {
        const { data } = await axios.get('https://api.github.com/users/ndanev/repos');
        const filteredRepos = data.filter((repo) => {
            return !repo.private
        })
        repos.value = filteredRepos
    } catch (error) {
        console.log("Error:", error.message)
    }
}
onMounted(() => {
    getGithubRepos()
})
</script>
<style></style>