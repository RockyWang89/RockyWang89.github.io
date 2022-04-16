import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';
import Api from './Api';

class App extends Component {
    //使用state对象来存放虚拟数据，可以将state看作临时需要保存但暂时无需修改数据库的数据，state是
    state = {
        characters: []
    };

    removeCharacter = (index) => {
        const {characters} = this.state;

        //想修改state里的属性或方法必须要使用setState方法
        this.setState({
            characters: characters.filter((ch, i) => {  //filter方法中的第一个参数是数组元素，第二个参数是该元素的索引
                return i !== index;
            })
        });
    };

    handleSubmit = (character) => {
        // ...是javascript的操作符，用于将数组或字符串进行展开（如这里等同于将原有characters中的所有元素再加上新的character组成新的数组赋给characters），也可用于将对象展开成数个key-value对
        this.setState({characters: [...this.state.characters, character]}); 
    };

    render() {
        //构建一个模拟数据数组
        /* const characters = [
            {
                name: "Mac",
                job: "Bouncer"
            },
            {
                name: "Rocky",
                job: "Developer"
            },
            {
                name: "Charlie",
                job: "Doctor"
            },
            {
                name: "Jane",
                job: "Designer"
            }
        ]; */

        const {characters} = this.state;

        return (  //将character的数据传给到子组件（child component）中，自己命名一个属性，这里属性名是characterData，用"{js表达}"给属性进行赋值
            <div className='App'>
                <Form handleSubmit={this.handleSubmit}/>
                <br/>
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
                <br/>
                <Api />
            </div>
        );
        //方法同样可以通过设置属性的方法传递给子组件，如上面的removeCharacter方法
    }
}

export default App;