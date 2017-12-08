<template>
    <div class="personalManage formBox">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="会员名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="头像" prop="name">
                <el-upload
                        action=""
                        list-type="picture-card"
                        :on-preview="handlePictureCardPreview"
                        :on-remove="handleRemove">
                    <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible" size="tiny">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-form-item>
            <el-form-item label="姓名" prop="username">
                <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item prop="email" label="邮箱">
                <el-input v-model="ruleForm.email"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="sex">
                <el-radio-group v-model="ruleForm.sex">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="手机号" prop="number">
                <el-input v-model="ruleForm.number"></el-input>
            </el-form-item>
            <el-form-item label="部门" prop="department">
                <el-select v-model="ruleForm.department" placeholder="请选择部门">
                    <el-option label="部门一" value="bm1"></el-option>
                    <el-option label="部门二" value="bm2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="职位" prop="position">
                <el-select v-model="ruleForm.position" placeholder="请选择职位">
                    <el-option label="职位一" value="zw1"></el-option>
                    <el-option label="职位二" value="zw2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="登录密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认登录密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="支付密码" prop="paypass">
                <el-input type="password" v-model="ruleForm.paypass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认支付密码" prop="paycheckPass">
                <el-input type="password" v-model="ruleForm.paycheckPass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入登录密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入登录密码'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入登录密码不一致!'));
                } else {
                    callback();
                }
            };
            var validatePass3 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入支付密码'));
                } else {
                    if (this.ruleForm.paycheckPass !== '') {
                        this.$refs.ruleForm.validateField('paycheckPass');
                    }
                    callback();
                }
            };
            var validatePass4 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入支付密码'));
                } else if (value !== this.ruleForm.paypass) {
                    callback(new Error('两次输入支付密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                dialogImageUrl: '',
                dialogVisible: false,
                ruleForm: {
                    name: '',
                    username:'',
                    email:'',
                    number:'',
                    department:'',
                    position:'',
                    pass: '',
                    checkPass: '',
                    paypass: '',
                    paycheckPass: ''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入会员名称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    username: [
                        { required: true, message: '请输入姓名名称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    email: [
                        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                        { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
                    ],
                    number:[
                        { required: true, message: '手机号不能为空', trigger: 'blur' },
                        { type: 'number', message: '手机号必须为数字值', trigger: 'blur,change' }
                    ],
                    department: [
                        { required: true, message: '请选择部门', trigger: 'change' }
                    ],
                    position: [
                        { required: true, message: '请选择职位', trigger: 'change' }
                    ],
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                    paypass: [
                        { validator: validatePass3, trigger: 'blur' }
                    ],
                    paycheckPass: [
                        { validator: validatePass4, trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            }
        }
    }
</script>

<style>
    .formBox{
        width: 40%;
        margin-top: 20px;
    }
</style>