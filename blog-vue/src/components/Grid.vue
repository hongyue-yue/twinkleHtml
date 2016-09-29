<style>
#form{width:100%;height:100%;position:relative;}
.dialog {width:310px;border:1px solid green;position:absolute;top:18%;left:18%;
         z-index:20;visibility: hidden;backface-visibility:hidden;
				 border-radius: 3px;background: #fff;overflow: hidden;
	       box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);	transition: .5s ease-in-out;
	       opacity:1;transform: rotateY(-90deg);
         }
.dialog-header{width:100%;height:30px;background-color:#0090d3;position:relative;}
.dialog-header img{position: absolute;top:5px;right:5px;cursor: pointer;transition: transform 1.0s ;}
.dialog-header img:hover{transform: rotate(360deg);}
.dialog-header h3{text-align:center;height:30px;line-height:30px;color:#fff}
.dialog-active {visibility:visible;opacity: 1;transform: rotateY(0);}
.dialog-overlay {position:absolute;top: 10px;left: 10px;right: 10px;bottom: 10px;
	               z-index: 10;opacity:0.4;background: rgba(0, 0, 0, 0.5);transition: all .6s;}

.form-group {	margin: 5px;}
.form-group > label {display: inline-block;width: 100px;text-align: right;font-size:10px;}
.form-group > input,.form-group > select {display: inline-block;height:20px;line-height:20px;}
.form-group>span{display: block;margin-left:20px;width:100%;height:8px;
                line-height: 8px;font-size:6px;text-align: center;color:red;}
input[type=text] {font-size:8px;border: 1px solid #ccc;}
input[type=text]:focus {border-color: #0090d3;transition: .3s ease-in;}

.table{width:310px;position:absolute;top:18%;left:18%;}
.table button{margin:2px auto;display:block;}
table,td,th {border-collapse: collapse;border-spacing: 0;font-size:12px;}

td,th {border: 1px solid #bcbcbc;padding: 2px 5px;}
th {padding: 5px;color: #fff;	background: #0090d3;	cursor: pointer;}
tr:nth-of-type(odd) {background: #fff;}
tr:nth-of-type(even) {background: #eee;}
</style>
<template>
	<div id="form">
		  <div class="table">
				<table >
					<thead>
						<tr>
							<th v-for="col in columns">
								{{ col.name | capitalize}}
							</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(index,entry) in dataList" track-by="$index">
							<td v-for="col in columns">
								{{ entry[col.name] }}
							</td>
							<td>
								<button v-on:click="dele($event)">delete</button>
							</td>
						</tr>
					</tbody>
				</table>
          	<button @click.stop.prevent="this.show = true">create</button>
		  </div>
			<div class="dialog" v-bind:class="{ 'dialog-active': show }">
							<div class="dialog-header">
								<img src="../assets/images11.png" width="20" height="20" @click="this.show = false">
					    	<h3>Create New Customer</h3>
			    		</div>
              <validator name="validation">
							<div class="dialog-body">
								<div  class="form-group">
									<label>Id</label>
									<input type="text" id="id" v-model="item.Id" v-validate:id="{required:true}"/>
                  <span v-show="$validation.id.required">Id is required</span>
								</div>
							<div class="form-group">
								<label>FirstName</label>
								<input type="text" id="first" v-model="item.firstName" v-validate:first="{required:true}"/>
                <span v-show="$validation.first.required">FirstName is required</span>
              </div>
							<div class="form-group">
								<label>LastName</label>
								<input type="text" id="last" v-model="item.lastName" v-validate:last="{required:true}"/>
                <span v-show="$validation.last.required">LastName is required</span>
              </div>
							<div class="form-group">
								<label>Phone</label>
								<input type="text" id="phone" v-model="item.phone"  v-validate:phone="{required:true}"/>
                <span v-show="$validation.phone.required">Phone is required</span>
              </div>
							<div class="form-group">
								<label></label>
								<button @click.stop.prevent="save()">Save</button>
							</div>
						</div>
          </validator>
				</div>
				<div class="dialog-overlay" v-show="show"></div>
		</div>


</template>
<script>
export default{
     data () {
        return{
					show:false,
        columns: [{
                      name: 'Id',
                  }, {
                      name: 'firstName'
                  }, {
                      name: 'lastName'
                  }, {
                      name: 'phone'
                  }],
        dataList:[
                  {
				   		        Id:'0',
					            firstName:'qaz',
						          lastName:'edc',
                   		phone:'123456'
					        },
					        {
					            Id:'1',
					            firstName:'wsx',
					            lastName:'rfv',
					            phone:'123456'
				        	},
									{
					            Id:'2',
					            firstName:'edc',
					            lastName:'rfv',
					            phone:'123456'
				        	},
								],
					    item:{},
        }
     },
		 ready(){
			 //this.load()
		 },
		methods: {
			  save(){
          let obj={}
          obj.Id=this.item.Id
          obj.firstName=this.item.firstName
          obj.lastName=this.item.lastName
          obj.phone=this.item.phone
          this.dataList.push(obj)
          this.$set('item',{})
					this.show=false
					/*let url=""
					let that=this
					that.$http.post(url,that.item).then((response)=>{
						that.$set('item',{})
						that.load()
					})*/
				},
				/*load(){
					let url=""
					let that=this
					that.$http.get(url).then((response)=>{
						let data=response.date
						for(let i=0;i<data.length;i++){
						 that.dataList.push(data[i])
						}
					})
				},*/
			  dele(e){
					let button=e.target||e.path[0]
					let tr=button.parentNode.parentNode;
          tr.parentNode.removeChild(tr);
			},
		},
}
</script>
