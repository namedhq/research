function a0_0x2958(){const _0x363099=['C3rHCL9YyxrPBMDFBwLU','z2fTzv9Pza','y2f0zwDVCNK','ota2nZiYme15A1L3Aq','y2HHBM5LBf9Pza','Ag9Tzv9Zy29Yzq','DgL0Bgu','C3rHCL9YyxrPBMDFy291BNq','ChvIBgLZAgvK','mJC5nMLgze9rqG','mu5IzxvoBG','mtjtquHnuKu','mZi2ntCYnZnfy3bKvNO','yxDHEv9Zy29Yzq','DMLLD3m','y2HHBM5LBf9Uyw1L','mJaZn1HwzfvuqG','C3rHCL9YyxrPBMDFyxzLCMfNzq','C2vHC29U','owrmqMrNyq','Ag9Tzv90zwfTx2LK','DMLKzw9FAwq','yxDHEv90zwfTx2LK','C3rHCL9YyxrPBMDFBwf4','y29UDgvUDf91CMW','qNvU','nfDVDKfmsa','z2fTzv9KyxrL','mJiWnte5ngjYtMzKra','nta1ndi2nfD4AuXgyW','zgvZy3jPChrPB24','DxbKyxrLza','CM93q291BNq','ndm0nZK2mervq2PWuG','nZqWmJuZv21VyNHA'];a0_0x2958=function(){return _0x363099;};return a0_0x2958();}function a0_0x5463(_0x4087cd,_0x3c3b0a){_0x4087cd=_0x4087cd-0x1f1;const _0x29589a=a0_0x2958();let _0x546357=_0x29589a[_0x4087cd];if(a0_0x5463['TdKJUI']===undefined){var _0x96b295=function(_0xf064aa){const _0x119e27='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x3b3237='',_0xf65696='';for(let _0x5e4957=0x0,_0x12ae18,_0x3ee0d0,_0x52d4f2=0x0;_0x3ee0d0=_0xf064aa['charAt'](_0x52d4f2++);~_0x3ee0d0&&(_0x12ae18=_0x5e4957%0x4?_0x12ae18*0x40+_0x3ee0d0:_0x3ee0d0,_0x5e4957++%0x4)?_0x3b3237+=String['fromCharCode'](0xff&_0x12ae18>>(-0x2*_0x5e4957&0x6)):0x0){_0x3ee0d0=_0x119e27['indexOf'](_0x3ee0d0);}for(let _0x590ad1=0x0,_0x30d869=_0x3b3237['length'];_0x590ad1<_0x30d869;_0x590ad1++){_0xf65696+='%'+('00'+_0x3b3237['charCodeAt'](_0x590ad1)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0xf65696);};a0_0x5463['nRyEtU']=_0x96b295,a0_0x5463['kYPHlU']={},a0_0x5463['TdKJUI']=!![];}const _0x459de7=_0x29589a[0x0],_0x58803a=_0x4087cd+_0x459de7,_0x339dd8=a0_0x5463['kYPHlU'][_0x58803a];return!_0x339dd8?(_0x546357=a0_0x5463['nRyEtU'](_0x546357),a0_0x5463['kYPHlU'][_0x58803a]=_0x546357):_0x546357=_0x339dd8,_0x546357;}const a0_0x440512=a0_0x5463;(function(_0x1135cf,_0x4517fb){const _0x158ca6=a0_0x5463,_0x41eb54=_0x1135cf();while(!![]){try{const _0x57d59b=-parseInt(_0x158ca6(0x1fa))/0x1*(parseInt(_0x158ca6(0x20c))/0x2)+-parseInt(_0x158ca6(0x212))/0x3*(parseInt(_0x158ca6(0x20a))/0x4)+-parseInt(_0x158ca6(0x211))/0x5+parseInt(_0x158ca6(0x1f9))/0x6*(-parseInt(_0x158ca6(0x200))/0x7)+-parseInt(_0x158ca6(0x20d))/0x8+-parseInt(_0x158ca6(0x203))/0x9*(-parseInt(_0x158ca6(0x1f3))/0xa)+-parseInt(_0x158ca6(0x1fc))/0xb*(-parseInt(_0x158ca6(0x1fb))/0xc);if(_0x57d59b===_0x4517fb)break;else _0x41eb54['push'](_0x41eb54['shift']());}catch(_0x1df7ab){_0x41eb54['push'](_0x41eb54['shift']());}}}(a0_0x2958,0xd9194));var {SQL}=globalThis[a0_0x440512(0x209)],db=new SQL(process.env.DATABASE1_URL);async function upsertSeasonGames(_0x3b3237,_0xf65696){const _0x11d759=a0_0x440512;for(const _0x5e4957 of _0xf65696){await _0x3b3237`
      INSERT INTO games (
        game_id,
        season,
        game_date,
        home_team_id,
        away_team_id,
        home_score,
        away_score
      )
      VALUES (
        ${_0x5e4957[_0x11d759(0x1f1)]},
        ${_0x5e4957[_0x11d759(0x202)]},
        ${_0x5e4957[_0x11d759(0x20b)]},
        ${_0x5e4957[_0x11d759(0x204)]},
        ${_0x5e4957[_0x11d759(0x206)]},
        ${_0x5e4957[_0x11d759(0x1f5)]},
        ${_0x5e4957[_0x11d759(0x1fd)]}
      )
      ON CONFLICT (game_id) DO UPDATE
      SET
        season       = EXCLUDED.season,
        game_date    = EXCLUDED.game_date,
        home_team_id = EXCLUDED.home_team_id,
        away_team_id = EXCLUDED.away_team_id,
        home_score   = EXCLUDED.home_score,
        away_score   = EXCLUDED.away_score;
    `;}}async function getPopularCategories(){return db`
    SELECT category, COUNT(*) AS product_count
    FROM products
    GROUP BY category
    HAVING COUNT(*) > 10
  `;}async function deleteOldEntries(){const _0x1c89c8=a0_0x440512,_0x12ae18=await db`
    DELETE FROM articles
    WHERE added_date < '2020-01-01'
  `;return _0x12ae18[_0x1c89c8(0x210)];}async function getActiveChannels(){return db`
    SELECT *
    FROM query_table
    WHERE active = TRUE
  `;}async function upsertShorts(_0x3ee0d0,_0x52d4f2){const _0xc8565f=a0_0x440512;for(const _0x590ad1 of _0x52d4f2){await db`
      INSERT INTO results_shorts (
        video_id,
        channel_name,
        channel_id,
        category,
        published,
        updated,
        title,
        content_url,
        description,
        star_rating_count,
        star_rating_average,
        star_rating_min,
        star_rating_max,
        views
      )
      VALUES (
        ${_0x590ad1[_0xc8565f(0x205)]},
        ${_0x3ee0d0[_0xc8565f(0x1ff)]},
        ${_0x3ee0d0[_0xc8565f(0x1f4)]},
        ${_0x3ee0d0[_0xc8565f(0x1f2)]},
        ${_0x590ad1[_0xc8565f(0x1f8)]},
        ${_0x590ad1[_0xc8565f(0x20f)]},
        ${_0x590ad1[_0xc8565f(0x1f6)]},
        ${_0x590ad1[_0xc8565f(0x208)]},
        ${_0x590ad1[_0xc8565f(0x20e)]},
        ${_0x590ad1[_0xc8565f(0x1f7)]},
        ${_0x590ad1[_0xc8565f(0x201)]},
        ${_0x590ad1[_0xc8565f(0x213)]},
        ${_0x590ad1[_0xc8565f(0x207)]},
        ${_0x590ad1[_0xc8565f(0x1fe)]}
      )
      ON CONFLICT (video_id) DO UPDATE
      SET
        channel_name        = EXCLUDED.channel_name,
        channel_id          = EXCLUDED.channel_id,
        category            = EXCLUDED.category,
        published           = EXCLUDED.published,
        updated             = EXCLUDED.updated,
        title               = EXCLUDED.title,
        content_url         = EXCLUDED.content_url,
        description         = EXCLUDED.description,
        star_rating_count   = EXCLUDED.star_rating_count,
        star_rating_average = EXCLUDED.star_rating_average,
        star_rating_min     = EXCLUDED.star_rating_min,
        star_rating_max     = EXCLUDED.star_rating_max,
        views               = EXCLUDED.views;
    `;}}async function upsertLongform(_0x30d869,_0x1f142f){const _0x54974c=a0_0x440512;for(const _0x2bf473 of _0x1f142f){await db`
      INSERT INTO results_videos (
        video_id,
        channel_name,
        channel_id,
        category,
        published,
        updated,
        title,
        content_url,
        description,
        star_rating_count,
        star_rating_average,
        star_rating_min,
        star_rating_max,
        views
      )
      VALUES (
        ${_0x2bf473[_0x54974c(0x205)]},
        ${_0x30d869[_0x54974c(0x1ff)]},
        ${_0x30d869[_0x54974c(0x1f4)]},
        ${_0x30d869[_0x54974c(0x1f2)]},
        ${_0x2bf473[_0x54974c(0x1f8)]},
        ${_0x2bf473[_0x54974c(0x20f)]},
        ${_0x2bf473[_0x54974c(0x1f6)]},
        ${_0x2bf473[_0x54974c(0x208)]},
        ${_0x2bf473[_0x54974c(0x20e)]},
        ${_0x2bf473[_0x54974c(0x1f7)]},
        ${_0x2bf473[_0x54974c(0x201)]},
        ${_0x2bf473[_0x54974c(0x213)]},
        ${_0x2bf473[_0x54974c(0x207)]},
        ${_0x2bf473[_0x54974c(0x1fe)]}
      )
      ON CONFLICT (video_id) DO UPDATE
      SET
        channel_name        = EXCLUDED.channel_name,
        channel_id          = EXCLUDED.channel_id,
        category            = EXCLUDED.category,
        published           = EXCLUDED.published,
        updated             = EXCLUDED.updated,
        title               = EXCLUDED.title,
        content_url         = EXCLUDED.content_url,
        description         = EXCLUDED.description,
        star_rating_count   = EXCLUDED.star_rating_count,
        star_rating_average = EXCLUDED.star_rating_average,
        star_rating_min     = EXCLUDED.star_rating_min,
        star_rating_max     = EXCLUDED.star_rating_max,
        views               = EXCLUDED.views;
    `;}}export{upsertShorts,upsertSeasonGames,upsertLongform,getPopularCategories,getActiveChannels,deleteOldEntries};