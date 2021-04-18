import React, { Component } from 'react';
import ApiService from '../../ApiService';

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

class EditUserComponent extends Component{

    constructor(props){
        super(props);

        this.state = {
            id: '',
            firstName: '',
            lastName: '',
            age: '',
            salary: '',
            message: null
        }
    }
    componentDidMount(){
        this.loadUser();
    }

    loadUser = () => {
        ApiService.fetchUsersByID(window.localStorage.getItem("userID"))
            .then(res => {
                let user = res.data;
                this.setState({
                    id: user.id,
                    username: user.username,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    age: user.age,
                    salary: user.salary
                })
            })
            .catch(err => {
                console.log('loadUser() Error', err);
            });
    }

    onChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    saveUser = (e) => {
        e.preventDefault();

        let user = {
            id: this.state.id,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
            salary: this.state.salary,
        }

        ApiService.editUser(user)
            .then(res=>{
                this.setState({
                    message: user.username + '님 정보가 수정되었습니다.'
                })
                console.log(this.state.message);
                this.props.history.push('/users');
            })
            .catch(err => {
                console.log('saveUser() Error', err);
            });
    }

    render(){
        return(
            <div className='form-content-right'>
                <form>
                    <div className='form-inputs'>
                        <label className='form-label'>아이디</label>
                            <input className='form-input' type="text" name="username" readOnly={true}
                                 value={this.state.username}/>
                    </div>

                    <div className='form-inputs'>
                        <label className='form-label'>성</label>
                            <input className='form-input' placeholder="바꾸실 성을 입력해주세요" name="firstName"
                                 value={this.state.firstName} onChange={this.onChange}/>
                    </div>

                    <div className='form-inputs'>
                        <label className='form-label'>이름</label>
                            <input className='form-input' placeholder="바꾸실 이름을 입력해주세요" name="lastName"
                                 value={this.state.lastName} onChange={this.onChange}/>
                    </div>

                    <div className='form-inputs'>
                        <label className='form-label'>나이</label>
                            <input className='form-input' type="number" placeholder="나이를 입력해주세요" name="age"
                                 value={this.state.age} onChange={this.onChange}/>
                    </div>

                    <Button variant="contained" color="primary" onClick={this.saveUser}>저장</Button>
                </form>
            </div>
        );
    }
}

const style = {
    display: 'flex',
    justifyContent: 'center'
}
export default EditUserComponent;