/*! This file is auto-generated */
!function(a,r){var i={};wp.media.coerce=function(e,t){return r.isUndefined(e[t])&&!r.isUndefined(this.defaults[t])?e[t]=this.defaults[t]:"true"===e[t]?e[t]=!0:"false"===e[t]&&(e[t]=!1),e[t]},wp.media.string={props:function(e,t){var i,n=wp.media.view.settings.defaultProps;return e=e?r.clone(e):{},t&&t.type&&(e.type=t.type),"image"===e.type&&(e=r.defaults(e||{},{align:n.align||getUserSetting("align","none"),size:n.size||getUserSetting("imgsize","medium"),url:"",classes:[]})),t&&(e.title=e.title||t.title,"file"===(n=e.link||n.link||getUserSetting("urlbutton","file"))||"embed"===n?i=t.url:"post"===n?i=t.link:"custom"===n&&(i=e.linkUrl),e.linkUrl=i||"","image"===t.type?(e.classes.push("wp-image-"+t.id),i=(n=t.sizes)&&n[e.size]?n[e.size]:t,r.extend(e,r.pick(t,"align","caption","alt"),{width:i.width,height:i.height,src:i.url,captionId:"attachment_"+t.id})):"video"===t.type||"audio"===t.type?r.extend(e,r.pick(t,"title","type","icon","mime")):(e.title=e.title||t.filename,e.rel=e.rel||"attachment wp-att-"+t.id)),e},link:function(e,t){t={tag:"a",content:(e=wp.media.string.props(e,t)).title,attrs:{href:e.linkUrl}};return e.rel&&(t.attrs.rel=e.rel),wp.html.string(t)},audio:function(e,t){return wp.media.string._audioVideo("audio",e,t)},video:function(e,t){return wp.media.string._audioVideo("video",e,t)},_audioVideo:function(e,t,i){var n,a;return"embed"!==(t=wp.media.string.props(t,i)).link?wp.media.string.link(t):(n={},"video"===e&&(i.image&&-1===i.image.src.indexOf(i.icon)&&(n.poster=i.image.src),i.width&&(n.width=i.width),i.height&&(n.height=i.height)),a=i.filename.split(".").pop(),r.contains(wp.media.view.settings.embedExts,a)?(n[a]=i.url,wp.shortcode.string({tag:e,attrs:n})):wp.media.string.link(t))},image:function(e,t){var i,n={};return e.type="image",i=(e=wp.media.string.props(e,t)).classes||[],n.src=(r.isUndefined(t)?e:t).url,r.extend(n,r.pick(e,"width","height","alt")),e.align&&!e.caption&&i.push("align"+e.align),e.size&&i.push("size-"+e.size),n.class=r.compact(i).join(" "),t={tag:"img",attrs:n,single:!0},e.linkUrl&&(t={tag:"a",attrs:{href:e.linkUrl},content:t}),i=wp.html.string(t),e.caption&&(t={},n.width&&(t.width=n.width),e.captionId&&(t.id=e.captionId),e.align&&(t.align="align"+e.align),i=wp.shortcode.string({tag:"caption",attrs:t,content:i+" "+e.caption})),i}},wp.media.embed={coerce:wp.media.coerce,defaults:{url:"",width:"",height:""},edit:function(e,t){var i={};return t?i.url=e.replace(/<[^>]+>/g,""):(t=wp.shortcode.next("embed",e).shortcode,i=r.defaults(t.attrs.named,this.defaults),t.content&&(i.url=t.content)),wp.media({frame:"post",state:"embed",metadata:i})},shortcode:function(i){var e,n=this;return r.each(this.defaults,function(e,t){i[t]=n.coerce(i,t),e===i[t]&&delete i[t]}),e=i.url,delete i.url,new wp.shortcode({tag:"embed",attrs:i,content:e})}},wp.media.collection=function(e){var d={};return r.extend({coerce:wp.media.coerce,attachments:function(e){var i,t=e.string(),n=d[t],a=this;return delete d[t],n||(t=r.defaults(e.attrs.named,this.defaults),(n=r.pick(t,"orderby","order")).type=this.type,n.perPage=-1,void 0!==t.orderby&&(t._orderByField=t.orderby),"rand"===t.orderby&&(t._orderbyRandom=!0),t.orderby&&!/^menu_order(?: ID)?$/i.test(t.orderby)||(n.orderby="menuOrder"),t.ids?(n.post__in=t.ids.split(","),n.orderby="post__in"):t.include&&(n.post__in=t.include.split(",")),t.exclude&&(n.post__not_in=t.exclude.split(",")),n.post__in||(n.uploadedTo=t.id),i=r.omit(t,"id","ids","include","exclude","orderby","order"),r.each(this.defaults,function(e,t){i[t]=a.coerce(i,t)}),(e=wp.media.query(n))[this.tag]=new Backbone.Model(i),e)},shortcode:function(e){var t=e.props.toJSON(),i=r.pick(t,"orderby","order");return e.type&&(i.type=e.type,delete e.type),e[this.tag]&&r.extend(i,e[this.tag].toJSON()),i.ids=e.pluck("id"),t.uploadedTo&&(i.id=t.uploadedTo),delete i.orderby,i._orderbyRandom?i.orderby="rand":i._orderByField&&"rand"!==i._orderByField&&(i.orderby=i._orderByField),delete i._orderbyRandom,delete i._orderByField,i.ids&&"post__in"===i.orderby&&delete i.orderby,i=this.setDefaults(i),i=new wp.shortcode({tag:this.tag,attrs:i,type:"single"}),(t=new wp.media.model.Attachments(e.models,{props:t}))[this.tag]=e[this.tag],d[i.string()]=t,i},edit:function(e){var t,i=wp.shortcode.next(this.tag,e),n=this.defaults.id;if(i&&i.content===e)return i=i.shortcode,r.isUndefined(i.get("id"))&&!r.isUndefined(n)&&i.set("id",n),e=this.attachments(i),(t=new wp.media.model.Selection(e.models,{props:e.props.toJSON(),multiple:!0}))[this.tag]=e[this.tag],t.more().done(function(){t.props.set({query:!1}),t.unmirror(),t.props.unset("orderby")}),this.frame&&this.frame.dispose(),n=i.attrs.named.type&&"video"===i.attrs.named.type?"video-"+this.tag+"-edit":this.tag+"-edit",this.frame=wp.media({frame:"post",state:n,title:this.editTitle,editing:!0,multiple:!0,selection:t}).open(),this.frame},setDefaults:function(i){var n=this;return r.each(this.defaults,function(e,t){i[t]=n.coerce(i,t),e===i[t]&&delete i[t]}),i}},e)},wp.media._galleryDefaults={itemtag:"dl",icontag:"dt",captiontag:"dd",columns:"3",link:"post",size:"thumbnail",order:"ASC",id:wp.media.view.settings.post&&wp.media.view.settings.post.id,orderby:"menu_order ID"},wp.media.view.settings.galleryDefaults?wp.media.galleryDefaults=r.extend({},wp.media._galleryDefaults,wp.media.view.settings.galleryDefaults):wp.media.galleryDefaults=wp.media._galleryDefaults,wp.media.gallery=new wp.media.collection({tag:"gallery",type:"image",editTitle:wp.media.view.l10n.editGalleryTitle,defaults:wp.media.galleryDefaults,setDefaults:function(i){var n=this,a=!r.isEqual(wp.media.galleryDefaults,wp.media._galleryDefaults);return r.each(this.defaults,function(e,t){i[t]=n.coerce(i,t),e!==i[t]||a&&e!==wp.media._galleryDefaults[t]||delete i[t]}),i}}),wp.media.featuredImage={get:function(){return wp.media.view.settings.post.featuredImageId},set:function(e){var t=wp.media.view.settings;t.post.featuredImageId=e,wp.media.post("get-post-thumbnail-html",{post_id:t.post.id,thumbnail_id:t.post.featuredImageId,_wpnonce:t.post.nonce}).done(function(e){"0"===e?window.alert(wp.i18n.__("Could not set that as the thumbnail image. Try a different attachment.")):a(".inside","#postimagediv").html(e)})},remove:function(){wp.media.featuredImage.set(-1)},frame:function(){return this._frame?wp.media.frame=this._frame:(this._frame=wp.media({state:"featured-image",states:[new wp.media.controller.FeaturedImage,new wp.media.controller.EditImage]}),this._frame.on("toolbar:create:featured-image",function(e){this.createSelectToolbar(e,{text:wp.media.view.l10n.setFeaturedImage})},this._frame),this._frame.on("content:render:edit-image",function(){var e=this.state("featured-image").get("selection"),e=new wp.media.view.EditImage({model:e.single(),controller:this}).render();this.content.set(e),e.loadEditor()},this._frame),this._frame.state("featured-image").on("select",this.select)),this._frame},select:function(){var e=this.get("selection").single();wp.media.view.settings.post.featuredImageId&&wp.media.featuredImage.set(e?e.id:-1)},init:function(){a("#postimagediv").on("click","#set-post-thumbnail",function(e){e.preventDefault(),e.stopPropagation(),wp.media.featuredImage.frame().open()}).on("click","#remove-post-thumbnail",function(){return wp.media.featuredImage.remove(),!1})}},a(wp.media.featuredImage.init),wp.media.editor={insert:function(e){var t,i=!r.isUndefined(window.tinymce),n=!r.isUndefined(window.QTags),a=this.activeEditor?window.wpActiveEditor=this.activeEditor:window.wpActiveEditor;if(window.send_to_editor)return window.send_to_editor.apply(this,arguments);if(a)i&&(t=tinymce.get(a));else if(i&&tinymce.activeEditor)t=tinymce.activeEditor,a=window.wpActiveEditor=t.id;else if(!n)return!1;if(t&&!t.isHidden()?t.execCommand("mceInsertContent",!1,e):n?QTags.insertContent(e):document.getElementById(a).value+=e,window.tb_remove)try{window.tb_remove()}catch(e){}},add:function(e,t){var n=this.get(e);return n||((n=i[e]=wp.media(r.defaults(t||{},{frame:"post",state:"insert",title:wp.media.view.l10n.addMedia,multiple:!0}))).on("insert",function(e){var i=n.state();(e=e||i.get("selection"))&&a.when.apply(a,e.map(function(e){var t=i.display(e).toJSON();return this.send.attachment(t,e.toJSON())},this)).done(function(){wp.media.editor.insert(r.toArray(arguments).join("\n\n"))})},this),n.state("gallery-edit").on("update",function(e){this.insert(wp.media.gallery.shortcode(e).string())},this),n.state("playlist-edit").on("update",function(e){this.insert(wp.media.playlist.shortcode(e).string())},this),n.state("video-playlist-edit").on("update",function(e){this.insert(wp.media.playlist.shortcode(e).string())},this),n.state("embed").on("select",function(){var e=n.state(),t=e.get("type"),e=e.props.toJSON();e.url=e.url||"","link"===t?(r.defaults(e,{linkText:e.url,linkUrl:e.url}),this.send.link(e).done(function(e){wp.media.editor.insert(e)})):"image"===t&&(r.defaults(e,{title:e.url,linkUrl:"",align:"none",link:"none"}),"none"===e.link?e.linkUrl="":"file"===e.link&&(e.linkUrl=e.url),this.insert(wp.media.string.image(e)))},this),n.state("featured-image").on("select",wp.media.featuredImage.select),n.setState(n.options.state),n)},id:function(e){return e||((e=window.wpActiveEditor)||r.isUndefined(window.tinymce)||!tinymce.activeEditor?e:tinymce.activeEditor.id)||""},get:function(e){return e=this.id(e),i[e]},remove:function(e){e=this.id(e),delete i[e]},send:{attachment:function(i,e){var n,t,a=e.caption;return wp.media.view.settings.captions||delete e.caption,i=wp.media.string.props(i,e),n={id:e.id,post_content:e.description,post_excerpt:a},i.linkUrl&&(n.url=i.linkUrl),"image"===e.type?(t=wp.media.string.image(i),r.each({align:"align",size:"image-size",alt:"image_alt"},function(e,t){i[t]&&(n[e]=i[t])})):"video"===e.type?t=wp.media.string.video(i,e):"audio"===e.type?t=wp.media.string.audio(i,e):(t=wp.media.string.link(i),n.post_title=i.title),wp.media.post("send-attachment-to-editor",{nonce:wp.media.view.settings.nonce.sendToEditor,attachment:n,html:t,post_id:wp.media.view.settings.post.id})},link:function(e){return wp.media.post("send-link-to-editor",{nonce:wp.media.view.settings.nonce.sendToEditor,src:e.linkUrl,link_text:e.linkText,html:wp.media.string.link(e),post_id:wp.media.view.settings.post.id})}},open:function(e,t){var i;return t=t||{},e=this.id(e),this.activeEditor=e,(!(i=this.get(e))||i.options&&t.state!==i.options.state)&&(i=this.add(e,t)),(wp.media.frame=i).open()},init:function(){a(document.body).on("click.add-media-button",".insert-media",function(e){var t=a(e.currentTarget),i=t.data("editor"),n={frame:"post",state:"insert",title:wp.media.view.l10n.addMedia,multiple:!0};e.preventDefault(),t.hasClass("gallery")&&(n.state="gallery",n.title=wp.media.view.l10n.createGalleryTitle),wp.media.editor.open(i,n)}),(new wp.media.view.EditorUploader).render()}},r.bindAll(wp.media.editor,"open"),a(wp.media.editor.init)}(jQuery,_);