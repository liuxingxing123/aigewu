<template>
    <el-table
            :data="tableData"
            style="width: 100%"
            height="550"
            :default-sort = "{prop: 'date', order: 'descending'}"
    >
        <el-table-column
                type="selection"
                width="55">
        </el-table-column>
        <el-table-column
                prop="date"
                v-for="titles in tableTitle"
                :label="titles"
                width="180">
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        props: {
            tableTitle: {
                type: Array,
                default() {
                    return [
                        {
                        }
                    ];
                }
            },
        },
        data() {
            return {
            }
        },
        methods: {
            formatter(row, column) {
                return row.address;
            },
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        }
    }
</script>

<style>

</style>