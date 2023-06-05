import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tablecontent',
  templateUrl: './tablecontent.component.html',
  styleUrls: ['./tablecontent.component.css'],
  encapsulation: ViewEncapsulation.None
  
})
export class TablecontentComponent implements OnInit {
  @Input() day ;
  showData  = false;
  fileUrls: string[] = [
    'https://github.boschdevcloud.com/api/v3/repos/BH82WI/BootCamp23/contents/day1.md',
    'https://github.boschdevcloud.com/api/v3/repos/BH82WI/BootCamp23/contents/day2.md',
    'https://github.boschdevcloud.com/api/v3/repos/BH82WI/BootCamp23/contents/day3.md',
    'https://github.boschdevcloud.com/api/v3/repos/BH82WI/BootCamp23/contents/day4.md',
    'https://github.boschdevcloud.com/api/v3/repos/BH82WI/BootCamp23/contents/day5.md'
  ];
  tableData = {};
  bootstrapCardHTML: string;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // const mdContent = this.getMdFileContent()
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer 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')
    this.http.get(this.fileUrls[this.day], { headers: headers }).subscribe((data) => {
      const lines = data['content'].split("\\n")
      let content = []
      for (let i=0 ;i<lines.length;i++) {
        content.push(atob(lines[i]))
      }
      this.processData(content)
    })

  }

  processData(content: String[]) {
    const tableData = content.toString().split('\n').slice(4).map(row => row.split('|').map(cell => cell.trim()));
    const timeColumn = tableData.map(row => {if(row[1] != null || row[1] != undefined){return row[1]} else{return ''}}); // Extracting the Time column
    const actionColumn = tableData.map(row => {if(row[2] != null || row[2] != undefined){return row[2]} else{return ''}}); // Extracting the Action column
    const detailsColumn = tableData.map(row => {if(row[3] != null || row[3] != undefined){return row[3]} else{return ''}}); // Extracting the Details column
    const spocColumn = tableData.map(row => {if(row[4] != null || row[4] != undefined){return row[4]} else{return ''}}); // Extracting the Spoc column
    console.log(timeColumn)
    console.log(actionColumn)
    console.log(detailsColumn)
    console.log(spocColumn)

    const html = `
          <ul>
            ${timeColumn.map((time, index) => `   
                <div class="details-wrapper">
                  <div class="time capitalize">${time}</div>
                  <div class="details capitalize">${(detailsColumn[index] == '') ? actionColumn[index] : detailsColumn[index]}</div>
                  <div class="spoc capitalize">${spocColumn[index]}</div>
                </div>
                ${index !== timeColumn.length - 1 ? '<hr style="width:50%;text-align:left;margin-left:0">' : ''}
            `).join('')}
          </ul>
        `;

        // Use the generated HTML directly in your Angular component
        this.bootstrapCardHTML = `
          <div class="card maincard">
            <div class="card-body agenda-card">
              ${html}
            </div>
          </div>
        `;
        this.showData = true;
  }

  // fetchFileContent() {
  //   console.log('this.fileUrl : %d', this.fileUrl);

  //   this.fileService.getFileContent(this.fileUrl)
  //     .subscribe((data: string) => {
  //       // Parse the markdown file content and extract the table data
  //       const tableData = this.parseTableData(data);
  //       this.tableData = tableData;
  //     }, error => {
  //       console.error(`Error fetching file: ${this.fileUrl}`);
  //     });
  // }

  // parseTableData(content: string): any[] {
  //   // Implement your logic to parse the table data from the content
  //   // Example logic:
  //   const lines = content.split('\n');
  //   const headers = lines[0].split('|').map(header => header.trim());
  //   const tableData = lines.slice(3).map(row => {
  //     const rowData = row.split('|').map(cell => cell.trim());
  //     return Object.fromEntries(headers.map((header, index) => [header, rowData[index]]));
  //   });
  //   return tableData;
  // }
}
