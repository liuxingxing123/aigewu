<template>
    <div class="companyManage formBox">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="公司名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="公司logo" prop="name">
                <el-upload
                        action=""
                        list-type="picture-card"
                        :on-preview="handlePictureCardPreview1"
                        :on-remove="handleRemove">
                    <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible1" size="tiny">
                    <img width="100%" :src="dialogImageUrl1" alt="">
                </el-dialog>
            </el-form-item>
            <el-form-item label="公司类型" prop="username">
                <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="形象图片" prop="name">
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
            <el-form-item label="所在区域" prop="province">
                <el-select v-model="ruleForm.province" placeholder="请选择省份">
                    <el-option label="四川省" value="bm1"></el-option>
                    <el-option label="湖北省" value="bm2"></el-option>
                </el-select>
                <el-select v-model="ruleForm.province" placeholder="请选择城市">
                    <el-option label="成都市" value="zw1"></el-option>
                    <el-option label="武汉市" value="zw2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="主营行业" prop="industy">
                <el-select v-model="ruleForm.industy" placeholder="请选择主营行业">
                    <el-option label="行业一" value="bm1"></el-option>
                    <el-option label="行业二" value="bm2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="主要经营范围" prop="bussrange">
                <el-select v-model="ruleForm.bussrange" placeholder="请选择主要经营范围">
                    <el-option label="主要经营范围一" value="bm1"></el-option>
                    <el-option label="主要经营范围二" value="bm2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="公司成立年份">
                <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="经营模式" prop="businesstype">
                <el-input v-model="ruleForm.businesstype"></el-input>
            </el-form-item>
            <el-form-item label="公司规模" prop="big">
                <el-select v-model="ruleForm.big" placeholder="请选择公司人数范围">
                    <el-option label="10-50" value="10-50"></el-option>
                    <el-option label="50-100" value="50-100"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="注册资本" prop="creatMoney">
                <el-input v-model="ruleForm.creatMoney"></el-input>
            </el-form-item>
            <el-form-item label="销售的产品" prop="sellname">
                <el-input v-model="ruleForm.sellname"></el-input>
            </el-form-item>
            <el-form-item label="采购的产品" prop="product">
                <el-input v-model="ruleForm.product"></el-input>
            </el-form-item>
            <el-form-item label="公司地址" prop="address">
                <el-input v-model="ruleForm.address"></el-input>
            </el-form-item>
            <el-form-item label="公司电话" prop="number">
                <el-input v-model="ruleForm.number"></el-input>
            </el-form-item>
            <el-form-item label="公司email" prop="email">
                <el-input v-model="ruleForm.email"></el-input>
            </el-form-item>
            <el-form-item label="公司网址" prop="net">
                <el-input v-model="ruleForm.net"></el-input>
            </el-form-item>
            <el-form-item label="公司介绍" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
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
            return {
                dialogImageUrl: '',
                dialogVisible: false,
                dialogImageUrl1: '',
                dialogVisible1: false,
                ruleForm: {
                    name: '',
                    username:'',
                    sellname:'',
                    email:'',
                    big:'',
                    number:'',
                    businesstype:'',
                    department:'',
                    address:'',
                    position:'',
                    bussrange:'',
                    date1:'',
                    industy:'',
                    product:'',
                    creatMoney:'',
                    province:'',
                    net:'',
                    desc:''
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
                    businesstype: [
                        { required: true, message: '请输入经营模式', trigger: 'blur' },
                        { min: 3, max: 25, message: '长度在 3 到 25 个字符', trigger: 'blur' }
                    ],
                    sellname: [
                        { required: true, message: '请输入公司销售产品', trigger: 'blur' },
                        { min: 1, max: 25, message: '长度在 1 到 25 个字符', trigger: 'blur' }
                    ],
                    product: [
                        { required: true, message: '请输入公司产品', trigger: 'blur' },
                        { min: 1, max: 25, message: '长度在 1 到 25 个字符', trigger: 'blur' }
                    ],
                    address: [
                        { required: true, message: '请输入公司地址', trigger: 'blur' },
                        { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
                    ],
                    net: [
                        { required: true, message: '请输入公司网址', trigger: 'blur' },
                        { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
                    ],
                    email: [
                        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                        { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
                    ],
                    number:[
                        { required: true, message: '手机号不能为空', trigger: 'blur' },
                        { type: 'number', message: '手机号必须为数字值', trigger: 'blur,change' }
                    ],
                    creatMoney: [
                        { required: true, message: '注册资本不能为空不能为空', trigger: 'blur' },
                        { type: 'number', message: '注册资本必须为数字值', trigger: 'blur,change' }
                    ],
                    department: [
                        { required: true, message: '请选择部门', trigger: 'change' }
                    ],
                    big: [
                        { required: true, message: '请选择公司规模', trigger: 'change' }
                    ],
                    position: [
                        { required: true, message: '请选择职位', trigger: 'change' }
                    ],
                    bussrange:[
                        { required: true, message: '请选择经营范围', trigger: 'change' }
                    ],
                    industy:[
                        { required: true, message: '请选择主营行业', trigger: 'change' }
                    ],
                    province:[
                        { required: true, message: '请选择公司所在区域', trigger: 'change' }
                    ],
                    date1: [
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请填写公司介绍', trigger: 'blur' }
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
            },
            handlePictureCardPreview1(file) {
                this.dialogImageUrl1 = file.url;
                this.dialogVisible1 = true;
            }
        }
    }
</script>

<style>
    .personalManage{
        width: 40%;
        margin-top: 20px;
    }
</style>