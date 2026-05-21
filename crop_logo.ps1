Add-Type -AssemblyName System.Drawing
$srcPath = "D:\FLEXWARE\construction_company\public\logotipo.png"
$destPath = "D:\FLEXWARE\construction_company\public\logotipo_icon.png"

if (Test-Path $srcPath) {
    try {
        $image = [System.Drawing.Image]::FromFile($srcPath)
        
        # Crop parameters
        $cropWidth = $image.Width
        # Crop top 80% to exclude "PROJECT SOLUTIONS" and the yellow line
        $cropHeight = [int]($image.Height * 0.80)
        
        $srcRect = New-Object System.Drawing.Rectangle(0, 0, $cropWidth, $cropHeight)
        $cropped = New-Object System.Drawing.Bitmap($cropWidth, $cropHeight)
        $croppedGraphics = [System.Drawing.Graphics]::FromImage($cropped)
        $croppedGraphics.DrawImage($image, 0, 0, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
        
        # Now resize the cropped image to a web-friendly size (e.g., width = 160px)
        $destWidth = 160
        $destHeight = [int]($cropHeight * ($destWidth / $cropWidth))
        
        $resized = New-Object System.Drawing.Bitmap($destWidth, $destHeight)
        $resizedGraphics = [System.Drawing.Graphics]::FromImage($resized)
        $resizedGraphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        $resizedGraphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $resizedGraphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        
        $resizedGraphics.DrawImage($cropped, 0, 0, $destWidth, $destHeight)
        
        $resized.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
        
        # Clean up
        $resizedGraphics.Dispose()
        $resized.Dispose()
        $croppedGraphics.Dispose()
        $cropped.Dispose()
        $image.Dispose()
        
        Write-Host "Success: Logo icon cropped and resized successfully."
    } catch {
        Write-Host "Error: Failed to crop image: $_"
    }
} else {
    Write-Host "Error: Source image not found."
}
