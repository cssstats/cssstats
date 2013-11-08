module.exports =
  build_after_debug:
    files: [
      expand: true
      cwd: 'src/client/data'
      src: '**/*'
      dest: 'public/data'
    ,
      expand: true
      cwd: 'src/client/img'
      src: '**/*'
      dest: 'public/img'
    ]
  build_after_dist:
    files: [
      expand: true
      cwd: 'src/client/css'
      src: '**/*'
      dest: 'public/css'
    ,
      expand: true
      cwd: 'src/client/data'
      src: '**/*'
      dest: 'public/data'
    ,
      expand: true
      cwd: 'src/client/img'
      src: '**/*'
      dest: 'public/img'
    ]