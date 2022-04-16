//Create custom components
import React, {Component} from "react";

//Create simple component
const TableHeader = ()=>{
    return(
        <thead>
            <tr>
                <td>No.</td>
                <td>Name</td>
                <td>Job</td>
                <td>Operations</td>
            </tr>
        </thead>
    );
}

const TableBody = (props)=>{
    //这里的characterData也是从父组件Table中传过来的，包含着父组件中的数据
    const rows = props.characterData.map((row, index) => {  //map()可以返回一个数组，数组中的元素是对原数组中元素按照回调函数一一进行处理后返回的结果
        return(
            <tr key={index}>  
                <td>{index+1}</td>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
            </tr>
        );
        //上面的key和index不加也可以运行，但在React中创建列表时使用key会更方便识别列表中的元素
        //这里的onClick事件里必须使用回调函数调用removeCharacter，不能直接在大括号中放removeCharacter方法
    });

    console.log(rows);
    return <tbody>{rows}</tbody>
}

//Create class component
class Table extends Component {
    render() {
        const {characterData, removeCharacter} = this.props  //ES6的解构简写方式，相当于：characterData = this.props.characterData
        //这里的characterData是从父组件App中传过来的，包含着父组件中的数据

        return(   //JSX中return只能返回一个父级元素标签，其它标签必须放在该父级标签以内
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
            </table>
        );
    }
}

//props里的数据是read-only的，没有办法进行改变
//这里的Table组件也可以创建成一个简单组件

export default Table;