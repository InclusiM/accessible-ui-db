<template>
    <section class="resources" id="resources">
      <div class="container">
        <h2>Featured</h2>
        <div class="resource-grid">
          <div class="resource-card" v-for="item in resources" :key="item.id">
            <img :src="item.image" :alt="item.title" />
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <button>View Details</button>
          </div>
        </div>
      </div>
    </section>
  </template>

<script>
export default {
  name: 'Resources',
  data () {
    return {
      resources: [
        {
          id: 1,
          title: 'UI Kit',
          description: 'A guide to accessible UI.',
          image: 'https://images.pexels.com/photos/6612388/pexels-photo-6612388.jpeg?auto=compress&cs=tinysrgb&w=1200'
        },
        {
          id: 2,
          title: 'Apps',
          description: 'View screenshots.',
          image: 'https://images.pexels.com/photos/12351704/pexels-photo-12351704.png?auto=compress&cs=tinysrgb&w=1200'
        },
        {
          id: 3,
          title: 'Privacy',
          description: 'Security features of our website.',
          image: 'https://images.pexels.com/photos/8720271/pexels-photo-8720271.jpeg?auto=compress&cs=tinysrgb&w=1200'
        }
      ]
    }
  }
}
</script>

  <style scoped>
  .resources {
    padding: 80px 0;
    background: #f7f7f7;
    text-align: center;
  }
  .resources h2 {
    font-size: 2.5rem;
    margin-bottom: 50px;
  }
  .resource-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
  }
  .resource-card {
    background: #fff;
    border: 1px solid #e5e5e5;
    padding: 20px;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .resource-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
  .resource-card img {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
  .resource-card h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
  .resource-card p {
    font-size: 1rem;
    margin-bottom: 20px;
    color: #666;
  }
  .resource-card button {
    background: #ee3f08;
    border: none;
    padding: 10px 20px;
    color: #fff;
    cursor: pointer;
    transition: background 0.3s;
  }
  .resource-card button:hover {
    background: #ee3f08;
  }
  </style>
