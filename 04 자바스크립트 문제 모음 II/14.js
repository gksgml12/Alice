var foods = ["hamburger", "pasta", "curry", "chicken", "salad", "tteokbokki", "ramen", "pizza", "gimbap", "sushi"]

document.write(foods.length+'<br>');
for (var i=0;i<foods.length;i++) {
    document.write(foods[i]+'<br>');
}
for (var i=0;i<foods.length;i++) {
    if (i%2==1) {
        document.write(foods[i]+'<br>');
    }
}