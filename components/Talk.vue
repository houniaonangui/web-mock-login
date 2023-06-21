<template>
  <div id="app">
    <h1>贴吧发帖页面</h1>
    <post-form @post="addPost"></post-form>
    <post-list :posts="posts"></post-list>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      // 从Mock接口获取随机数据
      axios.get('/api/posts').then((response) => {
        this.posts.push(response.data);
      });
    },
    addPost(content) {
      // 发送内容后更新页面
      const newPost = {
        id: Date.now(),
        content: content,
      };
      this.posts.push(newPost);
    },
  },
};
</script>
