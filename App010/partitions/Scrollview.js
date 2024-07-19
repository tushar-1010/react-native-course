import { StatusBar, ScrollView, Button, StyleSheet, Text, View } from 'react-native';
import Card from '.././src/Card';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Card
        title="Lionel Messi"
        image="https://i2.wp.com/www.herald.ng/wp-content/uploads/2021/01/Messi-1.jpg?fit=2048%2C1365&ssl=1"
        description="Messi is one of best footballer ever"
      />
      <Card
        title="Beautiful Sunset"
        image="https://wallpapers.com/images/featured/sunset-view-15f9gqgjqgobwpo7.jpg"
        description="A beautiful sunset over the mountains."
      />
      <Card
        title="Mountain Adventure"
        image="https://media.istockphoto.com/id/1443409611/photo/man-on-stone-on-the-hill-and-beautiful-mountains-in-haze-at-colorful-sunset-in-autumn.jpg?s=612x612&w=0&k=20&c=dcyDpPqlhCWMZYgqgHSrJZdoaH_ARrlgkpUcARp1_GU="
        description="Exploring the breathtaking mountains."
      />
      <Card
        title="Anime"
        image="https://assets-prd.ignimgs.com/2022/08/17/top25animecharacters-blogroll-1660777571580.jpg?width=1280"
        description="Japanese animations."
      />
      <Card
        title="Computers"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiFYQtanV8sO5mj0OvClKA7U-Zv8x8AcfrXg&usqp=CAU"
        description="Makes your work easy"
      />
      <Card
        title="Anime"
        image="https://assets-prd.ignimgs.com/2022/08/17/top25animecharacters-blogroll-1660777571580.jpg?width=1280"
        description="Japanese animations."
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: 'beige',
    padding: 20,
  },
});
