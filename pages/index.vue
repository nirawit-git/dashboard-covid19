<template>
  <v-row justify="center" align="center">
    <v-col cols="12" class="text-center"><SiteLogo /></v-col>
    <v-col cols="11">
      <v-card>
        <div class="headline text-center pa-2">โรงพยาบาลสนาม</div>
        <v-card-text>
          <client-only placeholder="Loading...">
            <BeeGridTable
              border
              :columns="columns"
              :data="datarows"
              :showFilter="false"
              :showPager="false"
              :span-method="customSpanSum"
              :row-class-name="rowClassName"
            >
            </BeeGridTable>
          </client-only>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
    columns: [
      {
        title: 'เวร',
        key: 'timework',
        align: 'center',
        width: 100,
        filterHeight: 50,
        resizable: false,
        fixed: 'left',
      },
      {
        title: 'ยอดยกมา',
        align: 'center',
        children: [
          {
            title: 'ชาย',
            key: 'm_sumlast',
            align: 'center',
            width: 150,
            sortable: false,
          },
          {
            title: 'หญิง',
            key: 'f_sumlast',
            align: 'center',
            width: 150,
          },
        ],
      },
      {
        title: 'รับใหม่|รับย้าย',
        align: 'center',
        children: [
          {
            title: 'ชาย',
            key: 'm_new',
            align: 'center',
            width: 150,
          },
          {
            title: 'หญิง',
            key: 'f_new',
            align: 'center',
            width: 150,
          },
        ],
      },
      {
        title: 'จำหน่าย',
        align: 'center',
        children: [
          {
            title: 'Refer',
            align: 'center',
            children: [
              {
                title: 'ชาย',
                key: 'm_dc_refer',
                align: 'center',
                // width: 100,
              },
              {
                title: 'หญิง',
                key: 'f_dc_refer',
                align: 'center',
                // width: 100,
              },
            ],
          },
          {
            title: 'D/C',
            align: 'center',
            children: [
              {
                title: 'ชาย',
                key: 'm_dc',
                align: 'center',
                // width: 100,
              },
              {
                title: 'หญิง',
                key: 'f_dc',
                align: 'center',
                // width: 100,
              },
            ],
          },
        ],
      },
      {
        title: 'คงพยาบาล',
        align: 'center',
        children: [
          {
            title: 'ชาย',
            key: 'm_admit',
            align: 'center',
            // width: 100,
          },
          {
            title: 'หญิง',
            key: 'f_admit',
            align: 'center',
            // width: 100,
          },
        ],
      },
      // {
      //   title: 'Salary',
      //   key: 'salary',
      //   align: 'center',
      //   width: 200,
      //   filterHeight: 50,
      //   fixed: 'right',
      //   resizable: true,
      // },
    ],
    datarows: [
      { id: 1, timework: 'เช้า' },
      { id: 2, timework: 'รวม' },
      { id: 3, timework: 'บ่าย' },
      { id: 4, timework: 'รวม' },
      { id: 5, timework: 'ดึก' },
      { id: 6, timework: 'รวม' },
    ],
  }),
  methods: {
    customSpanSum({ row, column, rowIndex, columnIndex }) {
      if (rowIndex % 2 && columnIndex === 1) {
        return [1, 2]
      } else if (rowIndex % 2 && columnIndex === 2) {
        return [0, 0]
      }
      if (rowIndex % 2 && columnIndex === 3) {
        return [1, 2]
      } else if (rowIndex % 2 && columnIndex === 4) {
        return [0, 0]
      }
      if (rowIndex % 2 && columnIndex === 5) {
        return [1, 2]
      } else if (rowIndex % 2 && columnIndex === 6) {
        return [0, 0]
      }
      if (rowIndex % 2 && columnIndex === 7) {
        return [1, 2]
      } else if (rowIndex % 2 && columnIndex === 8) {
        return [0, 0]
      }
      if (rowIndex % 2 && columnIndex === 9) {
        return [1, 2]
      } else if (rowIndex % 2 && columnIndex === 10) {
        return [0, 0]
      }
    },
    rowClassName(row, index) {
      if (index === 1 || index === 3 || index === 5) {
        return 'custom-table-sum-row'
      }
      return ''
    },
  },
}
</script>

<style media="screen">
.bee-table .custom-table-info-cell-timework {
  background-color: #2db7f5;
  color: #fff;
}
.bee-table .custom-table-sum-row td {
  background-color: #ccc;
  color: #fff;
}
</style>
