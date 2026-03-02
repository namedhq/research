const a0_0x1e63b1=a0_0x29f9;(function(_0x9c88e0,_0x41a920){const _0xd35feb=a0_0x29f9,_0x3f7388=_0x9c88e0();while(!![]){try{const _0x2a6e91=parseInt(_0xd35feb(0x1a8))/0x1*(-parseInt(_0xd35feb(0x1b6))/0x2)+parseInt(_0xd35feb(0x1a6))/0x3+-parseInt(_0xd35feb(0x19c))/0x4*(parseInt(_0xd35feb(0x19f))/0x5)+-parseInt(_0xd35feb(0x19b))/0x6+parseInt(_0xd35feb(0x1b7))/0x7+-parseInt(_0xd35feb(0x1a1))/0x8+parseInt(_0xd35feb(0x1a9))/0x9;if(_0x2a6e91===_0x41a920)break;else _0x3f7388['push'](_0x3f7388['shift']());}catch(_0x30f64a){_0x3f7388['push'](_0x3f7388['shift']());}}}(a0_0x49ff,0xb8bdf));function a0_0x29f9(_0x105d91,_0x31e306){_0x105d91=_0x105d91-0x198;const _0x49ffe5=a0_0x49ff();let _0x29f94f=_0x49ffe5[_0x105d91];if(a0_0x29f9['TKlAJZ']===undefined){var _0x466c25=function(_0x49a467){const _0x170028='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0xf0d129='',_0x2529e5='';for(let _0x1509b7=0x0,_0x5c3cd0,_0x1cd176,_0x4738d5=0x0;_0x1cd176=_0x49a467['charAt'](_0x4738d5++);~_0x1cd176&&(_0x5c3cd0=_0x1509b7%0x4?_0x5c3cd0*0x40+_0x1cd176:_0x1cd176,_0x1509b7++%0x4)?_0xf0d129+=String['fromCharCode'](0xff&_0x5c3cd0>>(-0x2*_0x1509b7&0x6)):0x0){_0x1cd176=_0x170028['indexOf'](_0x1cd176);}for(let _0x65118e=0x0,_0x339798=_0xf0d129['length'];_0x65118e<_0x339798;_0x65118e++){_0x2529e5+='%'+('00'+_0xf0d129['charCodeAt'](_0x65118e)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x2529e5);};a0_0x29f9['vELKSI']=_0x466c25,a0_0x29f9['pXcnNT']={},a0_0x29f9['TKlAJZ']=!![];}const _0x29c3b7=_0x49ffe5[0x0],_0x289438=_0x105d91+_0x29c3b7,_0x5bc5a9=a0_0x29f9['pXcnNT'][_0x289438];return!_0x5bc5a9?(_0x29f94f=a0_0x29f9['vELKSI'](_0x29f94f),a0_0x29f9['pXcnNT'][_0x289438]=_0x29f94f):_0x29f94f=_0x5bc5a9,_0x29f94f;}var {SQL}=globalThis[a0_0x1e63b1(0x1ad)],db=new SQL(process.env.DATABASE1_URL);async function upsertSeasonGames(_0xf0d129,_0x2529e5){const _0x5467d6=a0_0x1e63b1;for(const _0x1509b7 of _0x2529e5){await _0xf0d129`
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
        ${_0x1509b7[_0x5467d6(0x199)]},
        ${_0x1509b7[_0x5467d6(0x1af)]},
        ${_0x1509b7[_0x5467d6(0x1a2)]},
        ${_0x1509b7[_0x5467d6(0x1b5)]},
        ${_0x1509b7[_0x5467d6(0x1a3)]},
        ${_0x1509b7[_0x5467d6(0x1a0)]},
        ${_0x1509b7[_0x5467d6(0x1b2)]}
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
  `;}async function deleteOldEntries(){const _0x1e1130=a0_0x1e63b1,_0x5c3cd0=await db`
    DELETE FROM articles
    WHERE added_date < '2020-01-01'
  `;return _0x5c3cd0[_0x1e1130(0x1ac)];}function a0_0x49ff(){const _0x57ec7d=['C3rHCL9YyxrPBMDFy291BNq','yxDHEv9Zy29Yzq','ChvIBgLZAgvK','zgvZy3jPChrPB24','Ag9Tzv90zwfTx2LK','mty0nLLPD011wG','nJC0mZGXnfvVBvngvW','C3rHCL9YyxrPBMDFBwf4','z2fTzv9Pza','DMLLD3m','nJC3mZKZnhruBhvSrG','mJy5mZy0sLb0uMH0','DgL0Bgu','y2f0zwDVCNK','mtbWv1vmrwq','Ag9Tzv9Zy29Yzq','nda2ndq4mgDtChnPqG','z2fTzv9KyxrL','yxDHEv90zwfTx2LK','C3rHCL9YyxrPBMDFBwLU','y2HHBM5LBf9Pza','mZq5mdy3ngvdzg9lyG','DMLKzw9FAwq','mtCZm2rywfLHra','mty0ndK1otDUue9qDfO','y2HHBM5LBf9Uyw1L','y29UDgvUDf91CMW','CM93q291BNq','qNvU','DxbKyxrLza','C2vHC29U','C3rHCL9YyxrPBMDFyxzLCMfNzq'];a0_0x49ff=function(){return _0x57ec7d;};return a0_0x49ff();}async function getActiveChannels(){return db`
    SELECT *
    FROM query_table
    WHERE active = TRUE
  `;}async function upsertShorts(_0x1cd176,_0x4738d5){const _0x26bbb3=a0_0x1e63b1;for(const _0x65118e of _0x4738d5){await db`
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
        ${_0x65118e[_0x26bbb3(0x1a7)]},
        ${_0x1cd176[_0x26bbb3(0x1aa)]},
        ${_0x1cd176[_0x26bbb3(0x1a5)]},
        ${_0x1cd176[_0x26bbb3(0x19e)]},
        ${_0x65118e[_0x26bbb3(0x1b3)]},
        ${_0x65118e[_0x26bbb3(0x1ae)]},
        ${_0x65118e[_0x26bbb3(0x19d)]},
        ${_0x65118e[_0x26bbb3(0x1ab)]},
        ${_0x65118e[_0x26bbb3(0x1b4)]},
        ${_0x65118e[_0x26bbb3(0x1b1)]},
        ${_0x65118e[_0x26bbb3(0x1b0)]},
        ${_0x65118e[_0x26bbb3(0x1a4)]},
        ${_0x65118e[_0x26bbb3(0x198)]},
        ${_0x65118e[_0x26bbb3(0x19a)]}
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
    `;}}async function upsertLongform(_0x339798,_0x471ad3){const _0x2c9453=a0_0x1e63b1;for(const _0x214d59 of _0x471ad3){await db`
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
        ${_0x214d59[_0x2c9453(0x1a7)]},
        ${_0x339798[_0x2c9453(0x1aa)]},
        ${_0x339798[_0x2c9453(0x1a5)]},
        ${_0x339798[_0x2c9453(0x19e)]},
        ${_0x214d59[_0x2c9453(0x1b3)]},
        ${_0x214d59[_0x2c9453(0x1ae)]},
        ${_0x214d59[_0x2c9453(0x19d)]},
        ${_0x214d59[_0x2c9453(0x1ab)]},
        ${_0x214d59[_0x2c9453(0x1b4)]},
        ${_0x214d59[_0x2c9453(0x1b1)]},
        ${_0x214d59[_0x2c9453(0x1b0)]},
        ${_0x214d59[_0x2c9453(0x1a4)]},
        ${_0x214d59[_0x2c9453(0x198)]},
        ${_0x214d59[_0x2c9453(0x19a)]}
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