Add-Type -AssemblyName System.Drawing

$inputPath = "C:\Users\apasi\.gemini\antigravity\brain\3bcd8c95-e168-4b5d-9746-83d288e9f17b\solar_man_green_screen_1768299053496.png"
$outputPath = "c:\Users\apasi\Desktop\TFG WORKS\green-valley-solar\public\Image\solar_man_transparent_final.png"

$bmp = [System.Drawing.Bitmap]::FromFile($inputPath)
$rect = New-Object System.Drawing.Rectangle(0, 0, $bmp.Width, $bmp.Height)

# Lock bits for faster processing (GetPixel is slow in PS loops) ?? No, PS loops are slow anyway. 
# But for 1 image, GetPixel might take 30s. Acceptable.
# Let's try simple loop first.

for ($x = 0; $x -lt $bmp.Width; $x++) {
    for ($y = 0; $y -lt $bmp.Height; $y++) {
        $pixel = $bmp.GetPixel($x, $y)
        
        # Fuzzy Green Detection
        # If Green is significantly higher than Red and Blue, it's the background.
        if ($pixel.G -gt ($pixel.R + 40) -and $pixel.G -gt ($pixel.B + 40)) {
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::Transparent)
        }
    }
}

$bmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Write-Output "Background removal complete: $outputPath"
