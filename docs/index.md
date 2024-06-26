---
layout: home
title: 首页

markdownStyles: false

hero:
  name: "Flowsand Cabin"
  text: "Just do it！"
  tagline: "I never thought about my daily preparation. It wasn't a matter of whether it was an option or not. It was, if I want to play, this is what I have to do, so I'd just show up and do it. -Kobe "

---

<script setup>
import { computed } from 'vue'
import  { data }  from './.vitepress/theme/posts.data'
import DetailedPostCard from './.vitepress/theme/DetailedPostCard.vue'
import nav from './.vitepress/nav'

const computedRecentPosts = computed(() => data.recentPosts.map(item => 
    ({...item, date: item.date.string})))
</script>

<div class="max-w-screen-lg w-full px-6 py-8 my-0 mx-auto">
  <DetailedPostCard
    v-for="(article, index) in computedRecentPosts"
    :key="index"
    :url="article.url"
    :title="article.title"
    :abstract="article.abstract"
    :date="article.date"
    :tags="article.tags"
  />
</div>
