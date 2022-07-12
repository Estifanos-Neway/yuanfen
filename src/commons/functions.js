const deaultHotspot = {
    height: 0.5677283018867926,
    width: 0.9924528301886792,
    x: 0,
    y: 0.2838641509433963
}
function cropImage(image, width, height) {
    const dimention = image.asset.metadata.dimensions;
    const hotspot = image.hotspot ?? {
        height: dimention.height,
        width: dimention.width,
        x: dimention.widht/2,
        y: dimention.height/2
    };
    const crop = image.crop ?? {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    };
    let rectX = hotspot.x - width/2
    rectX = rectX<crop.left?crop.left:rectX;
    rectX = rectX>hotspot.x-(hotspot.width)/2?crop.left:rectX;
    const rectY = hotspot.y - height/2
}
/**
 * "image":{2 items
"asset":{15 items
"_createdAt":"2022-07-02T23:10:47Z"
"_id":"image-517108a7bee4cf0adb04256db3c9846880763904-853x1280-jpg"
"_rev":"N2Hg4dZ6Q1uhtG5hoQ1fQv"
"_type":"sanity.imageAsset"
"_updatedAt":"2022-07-02T23:10:47Z"
"assetId":"517108a7bee4cf0adb04256db3c9846880763904"
"extension":"jpg"
"metadata":{7 items
"_type":"sanity.imageMetadata"
"blurHash":"dCGuz=9Y0qyGR19Z-@byDhImxAjZ?HV;9FabWGxSRONF"
"dimensions":{4 items
"_type":"sanity.imageDimensions"
"aspectRatio":0.66640625
"height":1280
"width":853"image":{2 items
"asset":{15 items
"_createdAt":"2022-07-02T23:10:47Z"
"_id":"image-517108a7bee4cf0adb04256db3c9846880763904-853x1280-jpg"
"_rev":"N2Hg4dZ6Q1uhtG5hoQ1fQv"
"_type":"sanity.imageAsset"
"_updatedAt":"2022-07-02T23:10:47Z"
"assetId":"517108a7bee4cf0adb04256db3c9846880763904"
"extension":"jpg"
"metadata":{7 items
"_type":"sanity.imageMetadata"
"blurHash":"dCGuz=9Y0qyGR19Z-@byDhImxAjZ?HV;9FabWGxSRONF"
"dimensions":{4 items
"_type":"sanity.imageDimensions"
"aspectRatio":0.66640625
"height":1280
"width":853
}
"hasAlpha":false
"isOpaque":true
"lqip":"data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQCBQcG/8QAKBAAAgIBAwMCBwEAAAAAAAAAAQIDBAAFBhESIUEUMRMVIiMyUWHR/8QAFgEBAQEAAAAAAAAAAAAAAAAABAAF/8QAHBEAAgMBAAMAAAAAAAAAAAAAAQIAESEDBBPw/9oADAMBAAIRAxEAPwDhqmh6xDpUGpX3rQwx/baQkdxz5zRdsPTv2UkiaGzShVVVk92PnKHXduXtw7aTT/oLrO3SsZJIIPfnLfaeh3dDkiWzW9PEiBQpHHVx5xbIq+UAg2tlzDekknLyM7qRvnDtDVSCNlBVOsdhhi25iburSTKqICAAF/mGbXBeo5qGO1COVLEyOlWtS0q+0vqi8SW2EiqvHK89zmg7rvBY6c4HJlHSr8/hz/uZ5oVQprtlGnllHxnXiQ8g8jzlpcszNtypWnfqeOdh1D9L7YJuTM1j6ohGUJoiV+IGyx5wxOeyXkJOGOBoQ0//2Q=="
"palette":{...}8 items
}
"mimeType":"image/jpeg"
"originalFilename":"photo_2022-06-24_20-38-17.jpg"
"path":"images/lvtoy6ny/content/517108a7bee4cf0adb04256db3c9846880763904-853x1280.jpg"
"sha1hash":"517108a7bee4cf0adb04256db3c9846880763904"
"size":115517
"uploadId":"1ecJTN6RxezOabGXCQmuzSydXKqEKcHK"
"url":"https://cdn.sanity.io/images/lvtoy6ny/content/517108a7bee4cf0adb04256db3c9846880763904-853x1280.jpg"
}
"hotspot":{5 items
"_type":"sanity.imageHotspot"
"height":0.5677283018867926
"width":0.9924528301886792
"x":0.5
"y":0.2838641509433963
}
}
}
}
"hasAlpha":false
"isOpaque":true
"lqip":"data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQCBQcG/8QAKBAAAgIBAwMCBwEAAAAAAAAAAQIDBAAFBhESIUEUMRMVIiMyUWHR/8QAFgEBAQEAAAAAAAAAAAAAAAAABAAF/8QAHBEAAgMBAAMAAAAAAAAAAAAAAQIAESEDBBPw/9oADAMBAAIRAxEAPwDhqmh6xDpUGpX3rQwx/baQkdxz5zRdsPTv2UkiaGzShVVVk92PnKHXduXtw7aTT/oLrO3SsZJIIPfnLfaeh3dDkiWzW9PEiBQpHHVx5xbIq+UAg2tlzDekknLyM7qRvnDtDVSCNlBVOsdhhi25iburSTKqICAAF/mGbXBeo5qGO1COVLEyOlWtS0q+0vqi8SW2EiqvHK89zmg7rvBY6c4HJlHSr8/hz/uZ5oVQprtlGnllHxnXiQ8g8jzlpcszNtypWnfqeOdh1D9L7YJuTM1j6ohGUJoiV+IGyx5wxOeyXkJOGOBoQ0//2Q=="
"palette":{...}8 items
}
"mimeType":"image/jpeg"
"originalFilename":"photo_2022-06-24_20-38-17.jpg"
"path":"images/lvtoy6ny/content/517108a7bee4cf0adb04256db3c9846880763904-853x1280.jpg"
"sha1hash":"517108a7bee4cf0adb04256db3c9846880763904"
"size":115517
"uploadId":"1ecJTN6RxezOabGXCQmuzSydXKqEKcHK"
"url":"https://cdn.sanity.io/images/lvtoy6ny/content/517108a7bee4cf0adb04256db3c9846880763904-853x1280.jpg"
}
"hotspot":{5 items
"_type":"sanity.imageHotspot"
"height":0.5677283018867926
"width":0.9924528301886792
"x":0.5
"y":0.2838641509433963
}
}
}
 */