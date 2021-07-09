// FileSystem() Initializes the object of the system.
// List<String> ls(String path)
// If path is a file path, returns a list that only contains this file's name.
// If path is a directory path, returns the list of file and directory names in this directory.
// The answer should in lexicographic order.

// void mkdir(String path) Makes a new directory according to the given path. The given directory path does not exist. If the middle directories in the path do not exist, you should create them as well.

// void addContentToFile(String filePath, String content)
// If filePath does not exist, creates that file containing given content.
// If filePath already exists, appends the given content to original content.

// String readContentFromFile(String filePath) Returns the content in the file at filePath.

// Create a file class
// Each file has a hash consisting of more files
function File() {
  this.isFile = false;
  this.contents = '';
  this.files = new Map();
}


var FileSystem = function() {
  this.root = new File();
};

/** 
* @param {string} path
* @return {string[]}
*/
FileSystem.prototype.ls = function(path) {
  let t = this.root;
  if(path !== '/') {
      let d = path.split('/');
      
      for(let i = 1; i < d.length; i++) {
          t = t.files.get(d[i]);
      }
      if(t.isFile) {
          return [d[d.length -1]];
      }
  }
  let result = [];
  for(let key of t.files.keys()) {
      result.push(key)
  }
  return result.sort((a,b) => {
      if(a > b) {
          return 1
      }
      else if(a < b) {
          return -1
      }
      else {
          return 0;
      }
  });
};

/** 
* @param {string} path
* @return {void}
*/
FileSystem.prototype.mkdir = function(path) {
  let d = path.split('/');
  let t = this.root;
  // Step down directory path, add new file if not already present
  for(let i = 1; i < d.length; i++) {
      if(!t.files.has(d[i])) {
          t.files.set(d[i], new File());
      }
      t = t.files.get(d[i]);
  }
};

/** 
* @param {string} filePath 
* @param {string} content
* @return {void}
*/
FileSystem.prototype.addContentToFile = function(filePath, content) {
  let d = filePath.split('/');
  let t = this.root;
  for(let i = 1; i < d.length - 1; i++) {
      t = t.files.get(d[i]);
  }
  if(!t.files.get(d[d.length - 1])) {
     t.files.set(d[d.length - 1], new File());
  }
  t = t.files.get(d[d.length - 1]);
  t.isFile = true;
  t.contents += content;
};

/** 
* @param {string} filePath
* @return {string}
*/
FileSystem.prototype.readContentFromFile = function(filePath) {
  let d = filePath.split('/');
  let t = this.root;
  for(let i = 1; i < d.length; i++) {
      t = t.files.get(d[i]);
  }
  return t.contents;
};

/** 
* Your FileSystem object will be instantiated and called as such:
* var obj = new FileSystem()
* var param_1 = obj.ls(path)
* obj.mkdir(path)
* obj.addContentToFile(filePath,content)
* var param_4 = obj.readContentFromFile(filePath)
*/