

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  //////////
  // Later, break up these into their own functions for better organization

  // Constructing all of the nested pages
  // - appendix
  // - catalog

  //////////////////////
  // Testing (Colors)
  const catalog_data = require('./src/data/Full_Catalog.json')
  const AcronymToSetting = require('./src/data/AcronymsSetting.json')

  // Template
  const bookTemplate = require.resolve('./src/templates/book.tsx')
  const settingTemplate = require.resolve('./src/templates/setting.tsx')

  const monster_data = require('./src/data/ALL_MONSTERS.json')
  const monster_titles = require('./src/data/AA_KEYS_TITLES.json')
  const monsterTemplate = require.resolve('./src/templates/monster.tsx')
  const monster_keys = Array.from(Object.keys(monster_titles)) ;  

  const printTemplate = require.resolve('./src/templates/printmonster.tsx')

  // All Monster data indexable by monster_key

  console.log("Creating indexable monster data map")
  var all_monster_map = new Map()
  for(monster in monster_data){
    all_monster_map[monster_data[monster].monster_key] = monster_data[monster]
  }


  /////////////////////////
  // Appendix
  
  var prev_key = ""
  var next_key = ""

  monster_data.forEach(monster_object => {
    // organize input to monster page

    const monster_key = monster_object.monster_key

    // get prev and next monsters
    const index = monster_keys.indexOf(monster_key.toString())
    if(index > 0 && index < monster_keys.length - 1){
        // console.log("first")
        prev_key = monster_keys[index - 1];
        next_key = monster_keys[index + 1];
    } else if(index === 0){
        prev_key = monster_keys[monster_keys.length -1];
        next_key = monster_keys[index + 1];
    } else if(index === monster_keys.length - 1){
        prev_key = monster_keys[index - 1];
        next_key = monster_keys[0];
    } else {
        console.error("Appendix, Error finding previous and next monster keys.")
        console.error("Index", monster_key, index, monster_keys.length)
        prev_key = "";
        next_key = "";
    }

    // console.log(monster_key)
    var path = `/appendix/${monster_key}`

    createPage({
      path: path,
      component: monsterTemplate,
      context: {
        monster_key: monster_key,
        monster_data: monster_object.monster_data,
        sources: monster_object.sources,
        statblock_names: monster_object.statblock_names,
        title: monster_object.title,
        prev_key: prev_key,
        next_key: next_key,
        monster_path: path
        // interweave_body: interweaveMonsterBody
      }
      
    })

    // Create Print Page
    createPage({
      path: path + "/print",
      component: printTemplate,
      context: {
        monster_key: monster_key,
        monster_data: monster_object.monster_data,
        sources: monster_object.sources,
        statblock_names: monster_object.statblock_names,
        title: monster_object.title,
        prev_key: prev_key,
        next_key: next_key,
        monster_path: path
        // interweave_body: interweaveMonsterBody
      }
      
    })
  })

 

  //////////////
  // Catalog


  // For Each Setting from settings.json
  const settings_json = require("./data/settings.json")
  settings_json.forEach(setting_object => {
    setting_object.source_books.forEach(book_id => {
      // search catalog_data for a matching book publish_id
      let book_object = {}
      catalog_data.forEach(target_book => {
        if(target_book.publish_id == book_id){
          book_object = target_book
        }
      })

      createPage({
        path: `/catalog/${setting_object.setting_key}/${book_id}`,
        component: bookTemplate,
        context: {
          pageContext: {
            author: book_object.author,
            monster_keys: book_object.monster_keys,
            publish_id: book_id,
            setting: AcronymToSetting[setting_object.setting_key],
            title: book_object.title,
            year: book_object.year
          }
        }
      })

      //////////////////////////
      // Create Book Monsters

      var prev_key = ""
      var next_key = ""
      // For each monster in the book, create a monster page
      var book_monster_keys = book_object.monster_keys
      for(monster_key in book_monster_keys){
        // handle prev and next based on this books monster_keys

        var tmp_book_monster_object = all_monster_map[book_monster_keys[monster_key]]
        if(tmp_book_monster_object === undefined){
          console.error("ERROR Could not find book monster index", book_monster_keys[monster_key])
        }
        // console.log("tmpMonster", tmp_book_monster_object, book_monster_keys[monster_key])

        // get prev and next monsters
        const index = book_monster_keys.indexOf(book_monster_keys[monster_key].toString())
        if(index > 0 && index < book_monster_keys.length - 1){
            // console.log("first")
            prev_key = book_monster_keys[index - 1];
            next_key = book_monster_keys[index + 1];
        } else if(index === 0){
            prev_key = book_monster_keys[book_monster_keys.length -1];
            next_key = book_monster_keys[index + 1];
        } else if(index === book_monster_keys.length - 1){
            prev_key = book_monster_keys[index - 1];
            next_key = book_monster_keys[0];
        } else {
            console.error("Error finding previous and next monster keys.")
            console.error("Index", book_monster_keys[monster_key], index, book_monster_keys.length, book_id)
            prev_key = "";
            next_key = "";
        }
        
        // if(tmp_book_monster_object.hasOwnProperty('prev_key') && tmp_book_monster_object.hasOwnProperty('next_key')){
        tmp_book_monster_object.prev_key = prev_key
        tmp_book_monster_object.next_key = next_key
        // } else {
        //   console.error(book_monster_keys)
        //   console.error("tmp_book_monster_object does not have property prev_key or next_key");
        // }

        var monster_path = `/catalog/${setting_object.setting_key}/${book_id}/${book_monster_keys[monster_key]}`
        // console.log("catalog monster", monster_path)
        // test
        // if(tmp_book_monster_object.monster_key == "horax"){
        //   console.log("test monster, HORAX", monster_path)
        //   console.log("prev", prev_key)
        //   console.log("next", next_key)
        // }

        createPage({
          path: monster_path,
          component: require.resolve('./src/templates/bookmonster.tsx'),
          context: {
            monster_key: book_monster_keys[monster_key],
            monster_data: tmp_book_monster_object.monster_data,
            sources: tmp_book_monster_object.sources,
            statblock_names: tmp_book_monster_object.statblock_names,
            title: tmp_book_monster_object.title,
            prev_key: prev_key,
            next_key: next_key,
            catelog_book: book_id,
            catelog_setting: setting_object.setting_key,
            monster_path: monster_path
          }
          
        })
      }

    })
  })


  // For Each Book
  // catalog_data.forEach(book_object => {
  //   var acronym = title_acronym[book_object.setting]
  //   var stem = "catalog/"
  //   if(acronym != ""){
  //     stem = `catalog/${acronym}`
  //   }
  //   var path = stem + `/${book_object.publish_id}`
    
  //   // testing
  //   if(book_object.publish_id == "TerrorsfromAbove"){
  //     console.log("Homebrew found", book_object, path)
  //   }

  //   // Create Setting / Book Page
  //   createPage({
  //     path: path,
  //     component: bookTemplate,
  //     context: {
  //       pageContext: book_object
  //     }
  //   })
  //   // Create Catalog / Book Page


  //   //////////////////////////
  //   // Create Book Monsters

  //   var prev_key = ""
  //   var next_key = ""
  //   // For each monster in the book, create a monster page
  //   var book_monster_keys = book_object.monster_keys
  //   for(monster_key in book_monster_keys){
  //     // handle prev and next based on this books monster_keys

  //     var tmp_book_monster_object = all_monster_map[book_monster_keys[monster_key]]
  //     if(tmp_book_monster_object === 'undefined'){
  //       console.error("Could not find book monster index", book_monster_keys[monster_key])
  //     }
  //     // console.log("tmpMonster", tmp_book_monster_object, book_monster_keys[monster_key])

  //     // get prev and next monsters
  //     const index = book_monster_keys.indexOf(book_monster_keys[monster_key].toString())
  //     if(index > 0 && index < book_monster_keys.length - 1){
  //         // console.log("first")
  //         prev_key = book_monster_keys[index - 1];
  //         next_key = book_monster_keys[index + 1];
  //     } else if(index === 0){
  //         prev_key = book_monster_keys[book_monster_keys.length -1];
  //         next_key = book_monster_keys[index + 1];
  //     } else if(index === book_monster_keys.length - 1){
  //         prev_key = book_monster_keys[index - 1];
  //         next_key = book_monster_keys[0];
  //     } else {
  //         console.error("Error finding previous and next monster keys.")
  //         console.error("index", book_monster_keys[monster_key], index, book_monster_keys.length)
  //         prev_key = "";
  //         next_key = "";
  //     }
      
  //     tmp_book_monster_object.prev_key = prev_key
  //     tmp_book_monster_object.next_key = next_key

  //     var monster_path = path + `/${book_monster_keys[monster_key]}`
  //     // test
  //     // if(tmp_book_monster_object.monster_key == "horax"){
  //     //   console.log("test monster, HORAX", monster_path)
  //     //   console.log("prev", prev_key)
  //     //   console.log("next", next_key)
  //     // }

  //     createPage({
  //       path: monster_path,
  //       component: require.resolve('./src/templates/bookmonster.tsx'),
  //       context: {
  //         monster_key: book_monster_keys[monster_key],
  //         monster_data: tmp_book_monster_object.monster_data,
  //         sources: tmp_book_monster_object.sources,
  //         statblock_names: tmp_book_monster_object.statblock_names,
  //         title: tmp_book_monster_object.title,
  //         prev_key: prev_key,
  //         next_key: next_key,
  //         catelog_book: book_object.publish_id,
  //         catelog_setting: acronym
  //       }
        
  //     })
  //   }

  // })

  // Settings
  // Settings
  // console.log(Object.entries(AcronymToSetting))
  var acronymEntries = Object.entries(AcronymToSetting)
  for(const [setting_acro, value] of acronymEntries) {
    var stem = "catalog/"
    var path = stem + setting_acro
    // console.log("Acronym", setting_acro, path)
    createPage({
      path: path,
      component: settingTemplate,
      context: {
        category: setting_acro
      }
    })
  }

}
