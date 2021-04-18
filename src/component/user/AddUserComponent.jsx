import React, { Component } from 'react';
import ApiService from '../../ApiService';

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from "@material-ui/core/Typography"
import '../basic/Form.css';

class AddUserComponent extends Component{

    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            age: '',
            message: null
        }
    }

    onChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    saveUser = (e) => {
        e.preventDefault();

        let user = {
            username: this.state.username,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
        }

        ApiService.addUser(user)
            .then(res=>{
                this.setState({
                    message: user.username + '님이 성공적으로 등록되었습니다.'
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
            <div>
                <div className="form-content-right">
                    <div className="form-inputs">
                        <label className='form-label'>아이디</label>
                            <input className = 'form-input' type="text" placeholder="아이디를 입력해주세요" name="username"
                                 value={this.state.username} onChange={this.onChange}/>
                    </div>

                    <div className='form-inputs'>
                        <label className='form-label'>패스워드</label>
                            <input className='form-input' type="password" placeholder="비밀번호를 입력해주세요" name="password"
                                value={this.state.password} onChange={this.onChange}/>
                    </div>

                    <div className='form-inputs'>
                        <label className='form-label'>성</label>
                            <input className='form-input' placeholder="성을 입력해주세요" name="firstName"
                                 value={this.state.firstName} onChange={this.onChange}/>
                    </div>

                    <div className='form-inputs'>
                        <label className='form-label'>이름</label>
                            <input className='form-input' placeholder="이름을 입력해주세요" name="lastName"
                                 value={this.state.lastName} onChange={this.onChange}/>
                    </div>

                    <div className='form-inputs'>
                        <label className='form-label'>나이</label>
                            <input className='form-input' type="number" placeholder="나이를 입력해주세요" name="age"
                                 value={this.state.age} onChange={this.onChange}/>
                    </div>
                <Button variant="contained" color="primary" onClick={this.saveUser}>저장</Button>
                </div>
            </div>
        );
    }
}

const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap'
}

const style = {
    display: 'flex',
    justifyContent: 'center'
}
export default AddUserComponent;