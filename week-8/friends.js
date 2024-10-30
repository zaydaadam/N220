// reference variables
const friendNameInput = document.getElementById("friendName");
const friendsList = document.getElementById("friendsList");
//variable to track my friends
const myFriends =[];
// Function for adding friend
function addFriend(){
    // get the name the user typed in
    const nameValue = friendNameInput.value;
    //add friend to myFriends list
    myFriends.push(nameValue);
    //add the name to the friends list
    friendsList.innerHTML += `<li>${nameValue}</li> <button onclick="removeFriend('${nameValue}')">X</button>`;
    //clear the name the user typed
    friendNameInput.value = "";
}
function removeFriend(friendName){
    // Use variable to track index of friend to reove
    let friendIndex
    console.log(friendName);
    // loop through current friends to find the friendName
    for(let i = 0; i < myFriends.length; i++){
        if(myFriends[i] === friendName){
            friendIndex = i;
        }
    }
    console.log(friendIndex)
//remove the person from the list
    myFriends.splice(friendIndex, 1);
    console.log(myFriends)

}
// function to loop through myFriends and show 'em on the page
function showFriends(){
    friendsListRef.innerHTML = "";
    myFriends.forEach(function (friendName){
    
    friendsList.innerHTML += `<li>${friendName}</li> <button onclick="removeFriend('${friendName}')">X</button>`;
});
}
