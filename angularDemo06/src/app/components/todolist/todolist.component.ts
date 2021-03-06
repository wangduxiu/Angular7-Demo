import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  public keyWords:string;
  public toList:any[]=[];

  constructor(public storage) { }

  ngOnInit() {
  }
  /** 判断toList中有没有keyWords */ 
  tolistHasKeyWord(toList:any,keyWords:any){
    //因为是异步请求 所以总会返回false 影响结果
    // toList.forEach(value => {
    //   if(value.title == keyWords){
    //     return true;
    //   }
    // });
    if (!keyWords) return false;
    for(let i=0;i<toList.length;i++){
      if(toList[i].title == keyWords){
        return true;
      }
    }
    return false;
  }
  /**添加到待办事项中 */
  doAdd(e) {
    if(e.keyCode == 13 && this.keyWords) {
      if(!this.tolistHasKeyWord(this.toList,this.keyWords)){
        this.toList.push({
          title:this.keyWords,
          status:0        //0表示待办事项   1表示已完成事项
        });  
      }else{
        alert("输入内容重复");
      }
      this.keyWords=""; 
    }
  }

  /**删除待办事项 */
  delData(key) {
    this.toList.splice(key,1);
  }
}
