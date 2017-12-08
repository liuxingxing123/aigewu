<template>
    <div class="createOrderManage formBox">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="商品名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="商品图片" prop="name">
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
            <el-form-item label="客户账号" prop="username">
                <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="收货人姓名" prop="receiptname">
                <el-input v-model="ruleForm.receiptname"></el-input>
            </el-form-item>
            <el-form-item label="收货地址" prop="province">
                <el-select v-model="ruleForm.province" placeholder="请选择省份">
                    <el-option label="四川省" value="bm1"></el-option>
                    <el-option label="湖北省" value="bm2"></el-option>
                </el-select>
                <el-select v-model="ruleForm.province" placeholder="请选择城市">
                    <el-option label="成都市" value="zw1"></el-option>
                    <el-option label="武汉市" value="zw2"></el-option>
                </el-select>
                <el-input v-model="ruleForm.province"></el-input>
            </el-form-item>
            <el-form-item label="收货邮编" prop="code">
                <el-input v-model="ruleForm.code"></el-input>
            </el-form-item>
            <el-form-item label="收货手机号" prop="number">
                <el-input v-model="ruleForm.number"></el-input>
            </el-form-item>
            <el-form-item label="产品名称型号" prop="product">
                <el-input v-model="ruleForm.product"></el-input>
            </el-form-item>
            <el-form-item label="单价" prop="price">
                <el-input v-model="ruleForm.price"></el-input>
            </el-form-item>
            <el-form-item label="数量" prop="num">
                <el-input v-model="ruleForm.num"></el-input>
            </el-form-item>
            <el-form-item label="运费" prop="freight">
                <el-input v-model="ruleForm.freight"></el-input>
            </el-form-item>
            <el-form-item label="总销售额" prop="allMoney">
                <el-input v-model="ruleForm.allMoney"></el-input>
            </el-form-item>
            <el-form-item label="定金">
                <el-input></el-input>
            </el-form-item>
            <el-form-item label="定金备注">
                <el-input></el-input>
            </el-form-item>
            <el-form-item label="质量要求">
                <el-input></el-input>
            </el-form-item>
            <el-form-item label="质量说明">
                <el-input v-model="ruleForm.quality"></el-input>
            </el-form-item>
            <el-form-item label="生产预期">
                <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"
                                    style="width: 100%;"></el-date-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="包装预期">
                <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"
                                    style="width: 100%;"></el-date-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="发货预期">
                <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"
                                    style="width: 100%;"></el-date-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="交货预期">
                <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"
                                    style="width: 100%;"></el-date-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="客户其他要求" prop="businesstype">
                <el-input v-model="ruleForm.businesstype"></el-input>
            </el-form-item>
            <el-form-item label="业务员备注" prop="mark">
                <el-input type="textarea" v-model="ruleForm.mark"></el-input>
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
                ruleForm: {
                    name: '',
                    username: '',
                    province: '',
                    email: '',
                    code: '',
                    number: '',
                    price: '',
                    num: '',
                    freight: '',
                    allMoney: '',
                    deposit:'',
                    depositMarks: '',
                    date1: '',
                    quality: '',
                    product: '',
                    creatMoney: '',
                    net: '',
                    mark: ''
                },
                rules: {
                    name: [
                        {required: true, message: '请输入商品名称', trigger: 'blur'},
                        {min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur'}
                    ],
                    username: [
                        {required: true, message: '请输入客户账户', trigger: 'blur'},
                        {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
                    ],
                    receiptname: [
                        {required: true, message: '请输入收货人姓名', trigger: 'blur'},
                        {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
                    ],
                    province: [
                        {required: true, message: '请选择收货地址', trigger: 'change'}
                    ],
                    code: [
                        {required: true, message: '邮编不能为空', trigger: 'blur'},
                        {type: 'number', message: '邮编必须为数字值', trigger: 'blur,change'}
                    ],
                    price: [
                        {required: true, message: '单价不能为空', trigger: 'blur'},
                        {type: 'number', message: '单价必须为数字值', trigger: 'blur,change'}
                    ],
                    num: [
                        {required: true, message: '数量不能为空', trigger: 'blur'},
                        {type: 'number', message: '数量必须为数字值', trigger: 'blur,change'}
                    ],
                    freight: [
                        {required: true, message: '运费不能为空', trigger: 'blur'},
                        {type: 'number', message: '运费必须为数字值', trigger: 'blur,change'}
                    ],
                    allMoney: [
                        {required: true, message: '总销售额不能为空', trigger: 'blur'},
                        {type: 'number', message: '总销售额必须为数字值', trigger: 'blur,change'}
                    ],
                    deposit:[
                        {required: true, message: '定金不能为空', trigger: 'blur'},
                        {type: 'number', message: '定金必须为数字值', trigger: 'blur,change'}
                    ],
                    product: [
                        {required: true, message: '请输入公司产品', trigger: 'blur'},
                        {min: 1, max: 25, message: '长度在 1 到 25 个字符', trigger: 'blur'}
                    ],
                    depositMarks: [
                        {required: true, message: '请输入单价备注', trigger: 'blur'},
                        {min: 1, max: 55, message: '长度在 1 到 55 个字符', trigger: 'blur'}
                    ],
                    quality: [
                        {required: true, message: '请输入质量要求', trigger: 'blur'},
                        {min: 1, max: 55, message: '长度在 1 到 55 个字符', trigger: 'blur'}
                    ],
                    net: [
                        {required: true, message: '请输入公司网址', trigger: 'blur'},
                        {min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur'}
                    ],
                    email: [
                        {required: true, message: '请输入邮箱地址', trigger: 'blur'},
                        {type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change'}
                    ],
                    number: [
                        {required: true, message: '手机号不能为空', trigger: 'blur'},
                        {type: 'number', message: '手机号必须为数字值', trigger: 'blur,change'}
                    ],
                    creatMoney: [
                        {required: true, message: '注册资本不能为空不能为空', trigger: 'blur'},
                        {type: 'number', message: '注册资本必须为数字值', trigger: 'blur,change'}
                    ],
                    department: [
                        {required: true, message: '请选择部门', trigger: 'change'}
                    ],
                    big: [
                        {required: true, message: '请选择公司规模', trigger: 'change'}
                    ],
                    position: [
                        {required: true, message: '请选择职位', trigger: 'change'}
                    ],
                    bussrange: [
                        {required: true, message: '请选择经营范围', trigger: 'change'}
                    ],
                    industy: [
                        {required: true, message: '请选择主营行业', trigger: 'change'}
                    ],
                    province: [
                        {required: true, message: '请选择公司所在区域', trigger: 'change'}
                    ],
                    date1: [
                        {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
                    ],
                    mark: [
                        {required: true, message: '请填写业务员备注', trigger: 'blur'}
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
    .personalManage {
        width: 40%;
        margin-top: 20px;
    }
</style>