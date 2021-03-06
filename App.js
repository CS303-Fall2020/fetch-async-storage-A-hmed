/*
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceDetail from "./src/components/TaskDetails";

export default class App extends Component {
  state = {
    placename:"",
    places: [],
    selectedPlace: null
  };
s
  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name: placeName,
          image: {
            uri:
              "https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg"
          }
        })
      };
    });
  };

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });
  };

  modalClosedHandler = () => {
    this.setState({
        
      selectedPlace: null
    });
  };

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.state.places}
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

import React, { Component } from "react";
import { StyleSheet, View, AsyncStorage, Button } from "react-native";

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceDetail from "./src/components/TaskDetails";

export default class App extends Component {
  state = {
    places: [],
    selectedPlace: null,
    placeName: ''
  };

  componentWillmount() {

    this.fetchData();
  }

  fetchData= async () => {
   try{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?userId=1&fbclid=IwAR3shlwBmhoouujfwf7u1-6jKoI3pizjrCOXsjGtxdHY6SiZfx4NSnieG5E');
    const json = await response.json();
    console.log(json);

     var arr =[];
    for(var i=0;i<json.length;i++){
         arr[i]={key :Math.random()
        , name:json[i].title
        ,image:{url : "https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg"}
        }

    } this.setState({places: arr})
   /* this.setState({
      places: [...this.state.places,...json.map(obj => {
            return { key: Math.random(),
               name: obj.title,
               image: { uri: "https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg" }
               }
               }
               )
              ]
    });
    
    AsyncStorage.setItem("Todo",JSON.stringify(this.state.places));
   
  }catch(e){

  }
}
  


  addnewname = (newname) => {
    this.setState({
      places: [...this.state.places, newname],
      places: this.state.places.splice(0, this.state.places.length)
    })
    //const arr = this.state.places.pop()

  }

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.placeAddedHandler(this.state.placeName);
    this.setState({
      placeName: ''
    })
  };



  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name: placeName,
          image: {
            uri:
              "https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg"
          }
        })
      };
    });
  };

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });
  };

  modalClosedHandler = () => {
    this.setState({})
    this.setState({

      selectedPlace: null
    });
  };

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      };
    });
  };
  
  render() {
   
   

    return (
      <View style={styles.container}>
        <PlaceDetail
          addnewname={this.addnewname}
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput placeSubmitHandler={this.placeSubmitHandler}
          placeNameChangedHandler={this.placeNameChangedHandler}
          placeName={this.state.placeName}
          onPlaceAdded={this.placeAddedHandler} />
        <PlaceList

          places={this.state.places}
          onItemSelected={this.placeSelectedHandler}
        />
        <View>
        <Button title="Refresh " onPress={this.fetchData()} ></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
*/
import React, { Component } from "react";
import { StyleSheet, View, Button, AsyncStorage, Text, Image } from "react-native";


import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceDetail from "./src/components/TaskDetails.js";
import pic from "./assets/b.jpg"
export default class App extends Component {
  state = {
    places: [],
    selectedPlace: null,
    placeName:'',
    isloading:true
  };
  
  
  
  
  componentWillMount(){
   setTimeout(()=>this.setState({isloading:false}),5000); 
    try{
  this.fitchdata();  
    }catch{
       var arr = []

      arr =  [...arr,...AsyncStorage.getItem('todos').then((res) => res)]
      this.state({
        places:arr
    })
    }
}
   
  fitchdata = async ()=>{
  const result   =await fetch('https://jsonplaceholder.typicode.com/todos?userId=1&fbclid=IwAR0IAhx-wpyj5R2fjxRQ7clV1uX4B1LydA1qzLaM88W58bw4hQF-VExRF1k')
  const json = await result.json();
  let newarr = [];
  newarr = [...newarr,...json.map(el=>{ return {key:Math.random(),name:el.title,image: {
    uri:
      "https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg"
  
    }
  }})]
  AsyncStorage.setItem("todos",JSON.stringify(newarr))
  
  this.setState({
    places:[...this.state.places,...json.map(el=>{ return {key:Math.random(),name:el.title,image: {
      uri:
        "https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg"
    
      }
    }})]
    
  })
  
  
  } 

  addnewname = (newname)=>{
  this.setState({
    places:[...this.state.places,newname],
    places:this.state.places.splice(0,this.state.places.length)
  })
  
  }
 
    placeNameChangedHandler = val => {
      this.setState({
        placeName: val
      });
    };
  
    placeSubmitHandler = () => {
      if (this.state.placeName.trim() === "") {
        return;
      }
  
      this.placeAddedHandler(this.state.placeName);
      this.setState({
        placeName:''
      })
    };



  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name: placeName,
          image: {
            uri:
              "https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg"
          }
        })
      };
    });
  };

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });
  };

  modalClosedHandler = () => {
    this.setState({})
    this.setState({
      
      selectedPlace: null
    });
  };

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      };
    });
  };

  render() {
if(this.state.isloading){
  return <View> 
  
  <Image source={pic}  />
  </View>
}
    return (
      <View style={styles.container}>
        <PlaceDetail
          addnewname={this.addnewname}
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput placeSubmitHandler={this.placeSubmitHandler} placeNameChangedHandler={this.placeNameChangedHandler} placeName={this.state.placeName} onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
       
          places={this.state.places}
          onItemSelected={this.placeSelectedHandler}
        />
        <Button title="refresh" onPress={()=>{
          this.setState({
            places:[]
          })
          this.fitchdata()}}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

